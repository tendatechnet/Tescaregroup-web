# Supabase Migration Guide

This guide explains how to migrate from EmailJS to Supabase for form handling.

## Benefits of Using Supabase

### Current (EmailJS):
- ✅ Simple email sending
- ✅ No backend needed
- ❌ No data persistence
- ❌ No file storage
- ❌ No admin dashboard
- ❌ Limited analytics

### With Supabase:
- ✅ Database storage for all submissions
- ✅ File storage for resumes, documents
- ✅ Admin dashboard to view/manage submissions
- ✅ Email notifications via Edge Functions
- ✅ Better data management
- ✅ Analytics and reporting
- ✅ Real-time updates
- ✅ Better scalability

## Setup Instructions

### 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up/Login
3. Create a new project
4. Note your project URL and anon key

### 2. Database Schema

Run these SQL commands in Supabase SQL Editor:

```sql
-- Contact Form Submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived'))
);

-- Staff Request Submissions
CREATE TABLE staff_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  facility_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  staff_type TEXT NOT NULL,
  number_of_staff INTEGER DEFAULT 1,
  shift_start_date DATE,
  shift_start_time TIME,
  shift_end_date DATE,
  shift_end_time TIME,
  additional_notes TEXT,
  file_url TEXT,
  file_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled'))
);

-- Job Applications
CREATE TABLE job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  city TEXT,
  state TEXT,
  postcode TEXT,
  position_type TEXT NOT NULL,
  preferred_start_date DATE,
  availability TEXT,
  current_employer TEXT,
  current_position TEXT,
  employment_start_date DATE,
  employment_end_date DATE,
  previous_employer TEXT,
  previous_position TEXT,
  previous_start_date DATE,
  previous_end_date DATE,
  responsibilities TEXT,
  qualification TEXT,
  institution TEXT,
  graduation_year TEXT,
  additional_qualifications TEXT,
  certifications TEXT,
  license_number TEXT,
  expiry_date DATE,
  ref1_name TEXT,
  ref1_position TEXT,
  ref1_phone TEXT,
  ref1_email TEXT,
  ref2_name TEXT,
  ref2_position TEXT,
  ref2_phone TEXT,
  ref2_email TEXT,
  resume_url TEXT,
  resume_name TEXT,
  cover_letter_url TEXT,
  cover_letter_name TEXT,
  certifications_file_url TEXT,
  certifications_file_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'shortlisted', 'rejected', 'hired'))
);

-- Create indexes for better query performance
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_staff_requests_created_at ON staff_requests(created_at DESC);
CREATE INDEX idx_staff_requests_status ON staff_requests(status);
CREATE INDEX idx_job_applications_created_at ON job_applications(created_at DESC);
CREATE INDEX idx_job_applications_status ON job_applications(status);
CREATE INDEX idx_job_applications_position_type ON job_applications(position_type);
```

### 3. Storage Buckets

Create storage buckets in Supabase Dashboard:

1. Go to Storage
2. Create bucket: `staff-request-files` (Public: false)
3. Create bucket: `job-applications` (Public: false)

**Storage Bucket Policies** (Run in SQL Editor after creating buckets):

```sql
-- Allow public uploads to staff-request-files bucket
CREATE POLICY "Allow public uploads to staff-request-files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'staff-request-files');

-- Allow public uploads to job-applications bucket
CREATE POLICY "Allow public uploads to job-applications"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'job-applications');

-- Allow authenticated users to read files (for admin dashboard)
CREATE POLICY "Allow authenticated reads"
ON storage.objects FOR SELECT
USING (auth.role() = 'authenticated');
```

### 4. Row Level Security (RLS)

Enable RLS and create policies:

```sql
-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (for form submissions)
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON staff_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON job_applications
  FOR INSERT WITH CHECK (true);

-- Allow reads only for authenticated admin users
-- (You'll need to set up Supabase Auth for this)
CREATE POLICY "Allow admin reads" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admin reads" ON staff_requests
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admin reads" ON job_applications
  FOR SELECT USING (auth.role() = 'authenticated');
```

### 5. Email Notifications via Edge Function

Create an Edge Function to send emails when forms are submitted:

1. Install Supabase CLI: `npm install -g supabase`
2. Initialize: `supabase init`
3. Create function: `supabase functions new send-email-notification`
4. Deploy: `supabase functions deploy send-email-notification`

Or use database triggers with a service like Resend/SendGrid.

## Environment Variables

Add to `.env`:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Migration Steps

1. Install Supabase client: `npm install @supabase/supabase-js`
2. Update API utilities to use Supabase
3. Update forms to upload files to Supabase Storage
4. Create admin dashboard to view submissions
5. Set up email notifications

## Cost Comparison

### EmailJS:
- Free: 200 emails/month
- Paid: $15/month for 1,000 emails

### Supabase:
- Free: 500MB database, 1GB storage, 2GB bandwidth
- Pro: $25/month for 8GB database, 100GB storage, 250GB bandwidth

Supabase provides more value for similar cost, especially with database and file storage included.

