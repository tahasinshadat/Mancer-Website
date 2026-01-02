# Resend Email Integration Setup Guide
## Link: [https://resend.com](https://resend.com) (3,000 emails/month free)
## How It Works

### Contact Form
- User fills out contact form
- Email sent to tahasinshadat@gmail.com with:
  - Name, email, company, service interest
  - Message content
  - Reply-To set to applicant's email (you can reply directly)

### Job Applications
- User clicks "Apply Now" on any position
- Redirected to dedicated application page at `/careers/apply?position=Job+Title`
- Form includes:
  - Personal info (name, email, phone)
  - Position details (pre-filled if from job listing)
  - Professional links (LinkedIn, portfolio)
  - Resume upload (required)
  - Cover letter (upload file OR write text)
- Email sent to tahasinshadat@gmail.com with:
  - All applicant information
  - Resume and cover letter as attachments
  - Professional HTML formatting
  - Reply-To set to applicant's email

## Email Sender Address

Currently using: `onboarding@resend.dev`

### To Use Your Own Domain:

1. Add your domain in Resend dashboard
2. Add DNS records (provided by Resend)
3. Update the `from` field in:
   - `app/api/contact/route.ts` (line 18)
   - `app/api/apply/route.ts` (line 54)

Change from:
```typescript
from: "Mancer Robotics <onboarding@resend.dev>"
```

To:
```typescript
from: "Mancer Robotics <contact@mancer.io>"  // or our domain
```

## File Size Limits

- **Resume/Cover Letter**: Max 10MB per file
- **Total email size**: Max 40MB (Resend limit)

## Testing

### Test Contact Form:
1. Go to `/contact`
2. Fill out the form
3. Submit
4. Check tahasinshadat@gmail.com for the email

### Test Job Application:
1. Go to `/careers`
2. Click "Apply Now" on any position
3. Fill out form and upload resume
4. Submit
5. Check tahasinshadat@gmail.com for email with attachments

## Security Notes

- `.env.local` is already in `.gitignore` - your API key won't be committed
- API key is only used server-side (API routes)
- File uploads are validated for type (PDF, DOC, DOCX only)
- Form validation ensures required fields are filled