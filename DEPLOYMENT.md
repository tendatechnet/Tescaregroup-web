# Vercel Deployment Guide

This guide will help you deploy the TES Care Group web application to Vercel.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your code pushed to a Git repository

## Quick Deployment

### Method 1: Vercel Dashboard (Recommended)

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Configure Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add `VITE_SITE_URL` with your production URL
   - Redeploy if needed

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # Preview deployment
   vercel

   # Production deployment
   vercel --prod
   ```

4. **Link to Existing Project** (if redeploying)
   ```bash
   vercel link
   ```

## Configuration

### Automatic Configuration

Vercel will automatically detect:
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

### Manual Configuration (if needed)

The `vercel.json` file is already configured with:
- SPA routing (all routes redirect to `index.html`)
- Cache headers for static assets
- Optimal build settings

## Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SITE_URL` | Production site URL | `https://tescaregroup.com.au` |
| `VITE_API_URL` | API endpoint (if needed) | `https://api.tescaregroup.com.au` |

**Important:** 
- Variables must start with `VITE_` to be accessible in the app
- Add variables for Production, Preview, and Development environments
- Redeploy after adding new variables

## Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `tescaregroup.com.au`)

2. **Configure DNS**
   - Vercel will provide DNS records
   - Add them to your domain registrar:
     - Type: `A` or `CNAME`
     - Name: `@` or `www`
     - Value: Provided by Vercel

3. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - Wait for DNS propagation (can take up to 48 hours)

## Post-Deployment Checklist

- [ ] Verify site loads correctly
- [ ] Test all routes (Home, About, Services, Contact, Request Staff)
- [ ] Test admin login functionality
- [ ] Verify SEO meta tags (use browser dev tools)
- [ ] Check mobile responsiveness
- [ ] Test form submissions
- [ ] Verify images load correctly
- [ ] Check console for errors
- [ ] Test on different browsers
- [ ] Verify analytics (if configured)

## Troubleshooting

### Build Fails

1. **Check Build Logs**
   - Go to Vercel Dashboard → Deployments
   - Click on failed deployment
   - Review build logs

2. **Common Issues**
   - Missing dependencies: Check `package.json`
   - Environment variables: Ensure they're set correctly
   - Build command: Verify it's `npm run build`

### Routes Not Working

- The `vercel.json` file includes SPA routing configuration
- All routes should redirect to `index.html`
- If issues persist, check the `rewrites` section in `vercel.json`

### Environment Variables Not Working

- Variables must start with `VITE_`
- Redeploy after adding variables
- Check variable names match exactly

### Performance Issues

- Vercel automatically optimizes builds
- Check Vercel Analytics for performance metrics
- Review build output sizes

## Continuous Deployment

Vercel automatically deploys:
- **Production**: On push to `main` branch
- **Preview**: On push to other branches
- **Pull Requests**: Automatic preview deployments

## Monitoring

- **Vercel Analytics**: Enable in Project Settings
- **Logs**: View in Vercel Dashboard → Deployments
- **Performance**: Check Vercel Analytics dashboard

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

---

**Ready to deploy?** Push your code and follow the steps above!

