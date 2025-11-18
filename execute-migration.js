/**
 * Execute Supabase Migration
 * 
 * This script provides instructions and attempts automated execution if service role key is available.
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read .env file
let supabaseUrl = '';
let serviceRoleKey = '';
try {
  const envContent = readFileSync(join(__dirname, '.env'), 'utf-8');
  const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.+)/);
  const keyMatch = envContent.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/);
  
  if (urlMatch) {
    supabaseUrl = urlMatch[1].trim();
  }
  if (keyMatch) {
    serviceRoleKey = keyMatch[1].trim();
  }
} catch (error) {
  console.log('⚠️  Could not read .env file\n');
}

// Read SQL file
const sqlFile = join(__dirname, 'supabase-schema.sql');
let sql;

try {
  sql = readFileSync(sqlFile, 'utf-8');
} catch (error) {
  console.error('❌ Error reading SQL file:', error.message);
  process.exit(1);
}

// Extract project ref
const projectRef = supabaseUrl.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];

function showManualInstructions() {
  console.log('📋 MANUAL EXECUTION REQUIRED\n');
  console.log('='.repeat(80));
  console.log('Option 1: Supabase Dashboard (Recommended)');
  console.log('='.repeat(80));
  if (projectRef) {
    console.log(`\n🔗 Direct Link: https://supabase.com/dashboard/project/${projectRef}/sql/new\n`);
  }
  console.log('Steps:');
  console.log('1. Open the SQL Editor link above');
  console.log('2. Copy the SQL from supabase-schema.sql');
  console.log('3. Paste and click "Run"\n');

  console.log('='.repeat(80));
  console.log('Option 2: Using psql (if you have database password)');
  console.log('='.repeat(80));
  if (projectRef) {
    console.log(`\npsql "postgresql://postgres:[PASSWORD]@db.${projectRef}.supabase.co:5432/postgres" -f supabase-schema.sql\n`);
    console.log('Get your database password from:');
    console.log(`https://supabase.com/dashboard/project/${projectRef}/settings/database\n`);
  }

  console.log('='.repeat(80));
  console.log('Option 3: Add Service Role Key for Automated Execution');
  console.log('='.repeat(80));
  console.log('\nTo enable automated execution, add to .env:');
  console.log('SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here');
  console.log('\nGet it from:');
  if (projectRef) {
    console.log(`https://supabase.com/dashboard/project/${projectRef}/settings/api\n`);
  }
  console.log('⚠️  WARNING: Service role key has full access. Keep it secret!\n');
}

async function executeMigration() {
  if (serviceRoleKey && projectRef) {
    console.log('🔄 Attempting to execute migration via Supabase Management API...\n');
    
    try {
      // Use Supabase Management API to execute SQL
      const response = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/database/query`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${serviceRoleKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: sql,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('✅ Migration executed successfully!\n');
        console.log('Result:', result);
        return;
      } else {
        const error = await response.text();
        console.log('⚠️  Management API execution failed, using manual method...\n');
        console.log('Error:', error);
      }
    } catch (error) {
      console.log('⚠️  Could not execute via API, using manual method...\n');
      console.log('Error:', error.message);
    }
  }
  
  // Fallback: Manual execution instructions
  showManualInstructions();
}

// Execute
executeMigration();
