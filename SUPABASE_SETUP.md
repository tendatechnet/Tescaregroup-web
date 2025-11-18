# Supabase Setup Guide

Quick setup guide for Supabase integration.

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - Project name: `tes-care-group` (or your preferred name)
   - Database password: (save this securely)
   - Region: Choose closest to Australia
5. Wait for project setup (2-3 minutes)

## Step 2: Set Up Database

1. Go to **SQL Editor** in your Supabase dashboard
2. Click "New Query"
3. Copy the entire contents of `supabase-schema.sql`
4. Paste and click "Run"
5. Verify tables are created:
   - `contact_submissions`
   - `staff_requests`
   - `job_applications`

## Step 3: Create Storage Buckets

1. Go to **Storage** in your Supabase dashboard
2. Click "New bucket"
3. Create bucket: `staff-request-files`
   - Public: **No** (unchecked)
   - File size limit: 5 MB
   - Allowed MIME types: Leave empty or add: `application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document`
4. Click "Create bucket"
5. Repeat for bucket: `job-applications`
   - Public: **No** (unchecked)
   - File size limit: 5 MB
   - Allowed MIME types: Leave empty or add: `application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png`

## Step 4: Set Up Storage Policies

1. Go to **Storage** → **Policies**
2. For each bucket (`staff-request-files` and `job-applications`):
   - Click "New Policy"
   - Policy name: "Allow public uploads"
   - Allowed operation: **INSERT**
   - Policy definition:
     ```sql
     (bucket_id = 'staff-request-files')
     ```
     (or `job-applications` for the other bucket)
   - Click "Review" then "Save policy"

Alternatively, run this SQL in SQL Editor:

```sql
-- Allow public uploads to staff-request-files
CREATE POLICY "Allow public uploads to staff-request-files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'staff-request-files');

-- Allow public uploads to job-applications
CREATE POLICY "Allow public uploads to job-applications"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'job-applications');
```

## Step 5: Get API Credentials

1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** → This is your `VITE_SUPABASE_URL`
   - **anon public** key → This is your `VITE_SUPABASE_ANON_KEY`

## Step 6: Configure Environment Variables

1. Copy `example.env` to `.env`:
   ```bash
   cp example.env .env
   ```

2. Edit `.env` and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   VITE_SITE_URL=https://tescaregroup.com.au
   ```

3. Restart your dev server:
   ```bash
   npm run dev
   ```

## Step 7: Test Form Submissions

1. Test contact form submission
2. Test staff request form submission
3. Test job application form submission
4. Verify data appears in Supabase dashboard:
   - Go to **Table Editor**
   - Check `contact_submissions`, `staff_requests`, and `job_applications` tables

## Step 8: (Optional) Set Up Email Notifications

To receive email notifications when forms are submitted:

### Option A: Supabase Edge Function
1. Install Supabase CLI: `npm install -g supabase`
2. Initialize: `supabase init`
3. Create function: `supabase functions new send-email`
4. Deploy: `supabase functions deploy send-email`
5. Set up database trigger to call function on insert

### Option B: Database Trigger with External Service
Use services like Resend, SendGrid, or Postmark with database triggers.

See `SUPABASE_MIGRATION.md` for more details.

## Troubleshooting

**Error: "Failed to submit form"**
- Check Supabase URL and key are correct in `.env`
- Verify tables exist in Supabase dashboard
- Check browser console for detailed error messages

**Error: "Failed to upload file"**
- Verify storage buckets are created
- Check storage policies allow INSERT operations
- Verify file size is under 5MB

**Data not appearing in database**
- Check Row Level Security (RLS) policies
- Verify INSERT policies are set correctly
- Check Supabase logs in dashboard

## Next Steps

- Set up admin authentication to view submissions
- Create admin dashboard to view/manage submissions
- Set up email notifications
- Configure backups and monitoring

