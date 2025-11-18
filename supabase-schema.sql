-- Supabase Database Schema for TES Care Group
-- Run this SQL in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- Contact Form Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived'))
);

-- Staff Request Submissions Table
CREATE TABLE IF NOT EXISTS staff_requests (
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

-- Job Applications Table
CREATE TABLE IF NOT EXISTS job_applications (
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
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_staff_requests_created_at ON staff_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_staff_requests_status ON staff_requests(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_position_type ON job_applications(position_type);
CREATE INDEX IF NOT EXISTS idx_job_applications_email ON job_applications(email);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for form submissions)
CREATE POLICY "Allow public inserts on contact_submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts on staff_requests" ON staff_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts on job_applications" ON job_applications
  FOR INSERT WITH CHECK (true);

-- Note: For admin access, you'll need to set up Supabase Auth
-- and create policies that allow authenticated admin users to read/update
-- Example:
-- CREATE POLICY "Allow admin reads" ON contact_submissions
--   FOR SELECT USING (auth.role() = 'authenticated');

