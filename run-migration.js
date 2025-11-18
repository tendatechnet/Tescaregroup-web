/**
 * Run Supabase Migration Script
 * 
 * This script provides instructions and the SQL to run in Supabase Dashboard.
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read .env file
let supabaseUrl = '';
try {
  const envContent = readFileSync(join(__dirname, '.env'), 'utf-8');
  const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.+)/);
  if (urlMatch) {
    supabaseUrl = urlMatch[1].trim();
    // Extract project ref from URL
    const projectRef = supabaseUrl.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];
    if (projectRef) {
      console.log('✅ Found Supabase project:', projectRef);
      console.log(`\n🔗 SQL Editor URL: https://supabase.com/dashboard/project/${projectRef}/sql/new\n`);
    }
  }
} catch (error) {
  console.log('⚠️  Could not read .env file, using default project ref\n');
}

// Read SQL file
const sqlFile = join(__dirname, 'supabase-schema.sql');
let sql;

try {
  sql = readFileSync(sqlFile, 'utf-8');
  console.log('✅ SQL migration file loaded\n');
  console.log('='.repeat(80));
  console.log('📋 MIGRATION SQL (Copy this to Supabase SQL Editor):');
  console.log('='.repeat(80));
  console.log('\n' + sql + '\n');
  console.log('='.repeat(80));
} catch (error) {
  console.error('❌ Error reading SQL file:', error.message);
  process.exit(1);
}

console.log('\n📝 Instructions:');
console.log('1. Go to Supabase Dashboard SQL Editor');
if (supabaseUrl) {
  const projectRef = supabaseUrl.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];
  if (projectRef) {
    console.log(`   URL: https://supabase.com/dashboard/project/${projectRef}/sql/new`);
  }
} else {
  console.log('   URL: https://supabase.com/dashboard/project/_/sql/new');
}
console.log('2. Copy the SQL above');
console.log('3. Paste into the SQL Editor');
console.log('4. Click "Run" or press Cmd+Enter (Mac) / Ctrl+Enter (Windows)');
console.log('5. Verify tables are created in Table Editor\n');

console.log('✅ Migration ready to execute!\n');
