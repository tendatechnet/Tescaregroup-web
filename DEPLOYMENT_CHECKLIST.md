# Vercel Deployment Checklist

Use this checklist before deploying to ensure everything is ready.

## Pre-Deployment

- [ ] Code is committed and pushed to Git repository
- [ ] All tests pass (`npm test`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] No console errors in development
- [ ] All routes work correctly
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Mobile responsive design verified

## Vercel Configuration

- [x] `vercel.json` file created
- [x] `.vercelignore` file created
- [x] `.env.example` file created
- [x] Build configuration verified

## Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

- [ ] `VITE_SITE_URL` - Production URL (e.g., `https://tescaregroup.com.au`)
- [ ] Any other required environment variables

## SEO Configuration

- [x] SEO component created
- [x] Meta tags added to all pages
- [x] Open Graph tags configured
- [x] Twitter Card tags configured
- [x] Structured data (JSON-LD) added
- [ ] Update `index.html` with production URL (if different)
- [ ] Create and upload `og-image.jpg` (1200x630px recommended)

## Security

- [ ] Change default admin password in `src/utils/auth.js`
- [ ] Review authentication implementation
- [ ] Ensure sensitive data is not exposed

## Performance

- [x] Code splitting configured
- [x] Build optimizations enabled
- [x] Image lazy loading implemented
- [ ] Test build output size
- [ ] Verify Lighthouse scores

## Post-Deployment

- [ ] Verify site loads correctly
- [ ] Test all routes (Home, About, Services, Contact, Request Staff)
- [ ] Test admin login
- [ ] Verify SEO meta tags (use browser dev tools)
- [ ] Check mobile responsiveness
- [ ] Test form submissions
- [ ] Verify images load correctly
- [ ] Check console for errors
- [ ] Test on different browsers
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL certificate (automatic on Vercel)
- [ ] Set up analytics (if needed)

## Monitoring

- [ ] Enable Vercel Analytics
- [ ] Set up error tracking (if needed)
- [ ] Configure uptime monitoring (if needed)

---

**Ready to deploy?** Follow the steps in `DEPLOYMENT.md`

