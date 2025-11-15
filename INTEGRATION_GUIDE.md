# Integration Guide

This guide explains how to integrate the contact and staff request forms with your backend services.

## Form Integration Options

### Option 1: Google Sheets (Recommended for Quick Setup)

1. **Create a Google Apps Script:**
   - Go to [Google Apps Script](https://script.google.com)
   - Create a new project
   - Use the script template below
   - Deploy as a web app
   - Copy the web app URL

2. **Set up environment variable:**
   ```bash
   VITE_GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

3. **Google Apps Script Template:**
   ```javascript
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     
     // Add timestamp
     const timestamp = new Date();
     
     if (data.type === 'contact') {
       sheet.appendRow([
         timestamp,
         data.name,
         data.email,
         data.message
       ]);
     } else if (data.type === 'staff_request') {
       sheet.appendRow([
         timestamp,
         data.facilityName,
         data.contactPerson,
         data.phone,
         data.email,
         data.staffType,
         data.numberOfStaff,
         data.shiftStartDate,
         data.shiftStartTime,
         data.shiftEndDate,
         data.shiftEndTime,
         data.additionalNotes,
         data.fileName || 'None'
       ]);
     }
     
     return ContentService.createTextOutput(JSON.stringify({success: true}))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

### Option 2: Email Service (SendGrid, Mailgun, etc.)

1. **SendGrid Example:**
   ```bash
   VITE_CONTACT_EMAIL_API=https://api.sendgrid.com/v3/mail/send
   VITE_SENDGRID_API_KEY=your_api_key_here
   ```

2. **Backend endpoint would handle:**
   - Receiving form data
   - Sending email notifications
   - Storing in database (optional)

### Option 3: Custom Backend API

1. **Set up your backend endpoint:**
   ```bash
   VITE_API_BASE_URL=https://your-backend.com
   ```

2. **Expected endpoints:**
   - `POST /api/contact` - Contact form submissions
   - `POST /api/staff-request` - Staff request submissions

3. **Expected request format:**
   ```json
   {
     "name": "John Doe",
     "email": "john@example.com",
     "message": "Contact message"
   }
   ```

## Environment Variables

Create a `.env` file in the root directory:

```bash
# Copy from .env.example
cp .env.example .env
```

Then fill in your actual values.

## Testing Integration

1. **Development mode:**
   - Forms will log to console if no API is configured
   - Check browser console for submission data

2. **Production mode:**
   - Ensure all environment variables are set
   - Test form submissions
   - Monitor your backend/Google Sheets for incoming data

## Security Notes

- Never commit `.env` file to version control
- Use HTTPS for all API endpoints
- Validate and sanitize all form inputs on the backend
- Implement rate limiting to prevent spam
- Consider adding reCAPTCHA for production

## Next Steps

1. Choose your integration method
2. Set up your backend/service
3. Add environment variables
4. Test form submissions
5. Deploy to production

