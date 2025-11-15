# Environment Variables Setup

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# API Configuration
# Base API URL (if using custom backend)
VITE_API_BASE_URL=

# Google Sheets Webhook URL (for form submissions)
# Get this from Google Apps Script or Zapier/Make.com integration
VITE_GOOGLE_SHEETS_WEBHOOK=

# Contact Form Email API (SendGrid, Mailgun, etc.)
# Example: https://api.sendgrid.com/v3/mail/send
VITE_CONTACT_EMAIL_API=

# Staff Request API Endpoint
# Example: https://your-backend.com/api/staff-request
VITE_STAFF_REQUEST_API=

# Site URL (for SEO and canonical URLs)
VITE_SITE_URL=http://localhost:5173
```

## Quick Setup

1. Copy this file to `.env`:
   ```bash
   cp ENV_SETUP.md .env
   ```

2. Fill in your actual values

3. Restart your dev server:
   ```bash
   npm run dev
   ```

## Integration Options

See `INTEGRATION_GUIDE.md` for detailed integration instructions.

