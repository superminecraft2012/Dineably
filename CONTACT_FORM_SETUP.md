# Contact Form Setup Guide

This guide explains how to set up the contact form on your Dineably website using Web3Forms (100% free, no credit card required).

## What is Web3Forms?

Web3Forms is a free, open-source contact form backend service that sends form submissions directly to your email. It requires:
- ✅ No backend server
- ✅ No database
- ✅ No credit card
- ✅ 100% free forever (250 submissions/month on free plan)
- ✅ Spam protection included
- ✅ Email notifications

## Setup Instructions (5 minutes)

### Step 1: Sign Up for Web3Forms

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click **"Get Started"** or **"Sign Up"**
3. Enter your **email address** where you want to receive form submissions
4. Verify your email address
5. You'll receive your **Access Key** (looks like: `a1b2c3d4-1234-5678-9abc-def123456789`)

### Step 2: Add Your Access Key to Environment Variables

1. In your Dineably project root, copy the template:
   ```bash
   cp env.template .env.local
   ```

2. Open `.env.local` and replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=a1b2c3d4-1234-5678-9abc-def123456789
   ```

3. Save the file

### Step 3: Test the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your browser to `http://localhost:3000`

3. Click **"Book Audit"** or **"Free 15-Minute Audit"** button

4. Fill out the form and submit

5. Check your email (the one you registered with Web3Forms)

6. You should receive an email with the form submission details!

## What Gets Captured

When someone submits the form, you'll receive an email with:
- **Name**: Contact's full name
- **Email**: Contact's email address
- **Phone**: Contact's phone number
- **Restaurant Name**: Name of their restaurant
- **Title**: Their role (Owner, Manager, etc.)
- **Subject Line**: Formatted as "New Lead: [Name] ([Title]) - [Restaurant Name]"

## Email Notification Format

Example email you'll receive:

```
Subject: New Lead: John Smith (Owner) - Bella Pizza

From: Dineably Contact Form <noreply@web3forms.com>

Name: John Smith
Email: john@bellapizza.com
Phone: (425) 555-1234
Restaurant Name: Bella Pizza
Title: Owner
```

## Advanced Configuration (Optional)

### Change Recipient Email

To send form submissions to a different email:
1. Log into [web3forms.com](https://web3forms.com)
2. Go to your dashboard
3. Update the email address for your access key

### Add Email Templates

Web3Forms Pro allows custom email templates, but the free plan includes a clean, professional default template.

### Spam Protection

Web3Forms includes built-in spam protection. To add more:
1. Enable reCAPTCHA in your Web3Forms dashboard
2. Add the reCAPTCHA site key to the form component (see Web3Forms docs)

## Troubleshooting

### Form doesn't submit
- Check that `.env.local` exists and has the correct key
- Restart your dev server after adding environment variables
- Check browser console for errors

### Not receiving emails
- Check spam/junk folder
- Verify your email is confirmed in Web3Forms
- Check Web3Forms dashboard for submission logs

### "Access key invalid" error
- Make sure you copied the full access key
- Check for extra spaces in `.env.local`
- Regenerate key in Web3Forms dashboard if needed

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variable in your hosting platform:
   - **Variable name**: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value**: Your access key

2. Redeploy your site

3. Test the form on your live site

## Alternatives to Web3Forms

If you prefer a different solution:

1. **Formspree** (free tier available): https://formspree.io
2. **EmailJS** (free tier available): https://www.emailjs.com
3. **Google Forms** (free, but requires iframe)
4. **Netlify Forms** (free if hosted on Netlify)

To switch providers, update the API endpoint and payload structure in:
`/src/components/ContactForm.tsx` (lines 49-65)

## Support

- **Web3Forms Documentation**: https://docs.web3forms.com
- **Web3Forms Support**: support@web3forms.com
- **GitHub Issues**: https://github.com/web3forms/web3forms

## Cost Breakdown

- **Free Plan**: 250 submissions/month (perfect for most restaurants)
- **Pro Plan**: $6/month for 10,000 submissions + custom branding
- **No hidden fees or credit card required for free plan**

---

**You're all set!** 🎉 Your contact form is now capturing leads and emailing them directly to you.

