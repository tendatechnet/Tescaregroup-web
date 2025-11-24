# TES Care Group - Professional Healthcare Staffing Web Application

A modern, responsive web application for TES Care Group, providing aged-care staffing solutions across Australia. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **SEO Optimized**: Comprehensive SEO implementation with meta tags, Open Graph, and structured data
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **Authentication**: Secure admin login system with protected routes
- **Dynamic Routing**: React Router for seamless navigation
- **Form Handling**: Contact and staff request forms with validation
- **Test Coverage**: Unit tests for components and utilities

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [SEO Configuration](#seo-configuration)
- [Performance Optimization](#performance-optimization)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🛠 Tech Stack

### Core Technologies
- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool and dev server
- **React Router DOM 7.9.5** - Client-side routing
- **Tailwind CSS 4.1.17** - Utility-first CSS framework

### Key Libraries
- **Framer Motion 12.23.24** - Animation library
- **Lucide React 0.553.0** - Icon library
- **React Helmet Async** - SEO meta tag management
- **Clsx 2.1.1** - Conditional class names

### Development Tools
- **Vitest 4.0.8** - Testing framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
tes_webapp/
├── public/                 # Static assets
│   └── vite.svg           # Favicon
├── src/
│   ├── components/        # Reusable components
│   │   ├── common/        # Shared components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── ContactStrip.jsx
│   │   │   ├── AuthGuard.jsx
│   │   │   └── SEO.jsx
│   │   ├── forms/         # Form components
│   │   │   ├── ContactForm.jsx
│   │   │   └── RequestStaffForm.jsx
│   │   └── home/          # Home page components
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── WhyChooseUs.jsx
│   │       ├── ServiceHighlights.jsx
│   │       ├── Testimonials.jsx
│   │       └── VideoTestimonials.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── RequestStaff.jsx
│   │   ├── Login.jsx
│   │   └── Admin.jsx
│   ├── utils/             # Utility functions
│   │   ├── auth.js        # Authentication utilities
│   │   └── data/          # Data files
│   │       └── videoTestimonials.js
│   ├── test/              # Test setup
│   │   └── setup.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & Tailwind
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── vitest.config.js       # Vitest configuration
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tes_webapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm test` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

### Code Style

The project uses ESLint for code quality. Run `npm run lint` to check for issues.

### Environment Variables

Create a `.env` file in the root directory for environment-specific variables. You can copy `example.env` as a starting point:

```bash
cp example.env .env
```

Then edit `.env` and add your actual values:

```env
# EmailJS Configuration (Required for contact form)
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id_here
VITE_EMAILJS_STAFF_REQUEST_TEMPLATE_ID=your_staff_request_template_id_here

# Site URL (for SEO)
VITE_SITE_URL=https://tescaregroup.com.au
```

#### Setting Up EmailJS

1. **Sign up for EmailJS**: Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account
2. **Add an Email Service**: 
   - Go to Email Services in the dashboard
   - Add your email service (Gmail, Outlook, etc.)
   - Copy the Service ID
3. **Create Email Templates**:
   - Go to Email Templates
   - Create a template for the contact form with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{subject}}`
   - Create a template for staff requests with variables: `{{facility_name}}`, `{{contact_person}}`, `{{email}}`, `{{phone}}`, `{{staff_type}}`, etc.
   - Copy the Template IDs
4. **Get Your Public Key**:
   - Go to Account > General
   - Copy your Public Key
5. **Add to .env file**: Add all the values to your `.env` file

For detailed instructions, see the [EmailJS Tutorial](https://www.emailjs.com/docs/tutorial/overview/).

## 🏗 Building for Production

1. Build the application:
```bash
npm run build
```

2. The production build will be in the `dist/` directory

3. Preview the production build:
```bash
npm run preview
```

### Build Optimizations

- Code splitting for vendor libraries
- CSS minification
- JavaScript minification with esbuild
- Tree shaking for unused code
- Asset optimization

## 🧪 Testing

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Test Structure

Tests are co-located with their source files:
- Component tests: `ComponentName.test.jsx`
- Utility tests: `utilityName.test.js`

### Writing Tests

Example test structure:
```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## 🔍 SEO Configuration

### Meta Tags

The application includes comprehensive SEO meta tags:
- Primary meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card tags
- Structured data (JSON-LD)

### SEO Component

Use the SEO component in pages for dynamic meta tags:

```javascript
import SEO from '../components/common/SEO';

export const Page = () => {
  return (
    <>
      <SEO
        title="Page Title"
        description="Page description"
        url="/page-url"
      />
      {/* Page content */}
    </>
  );
};
```

### SEO Best Practices Implemented

- ✅ Semantic HTML
- ✅ Meta descriptions for all pages
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured data (Schema.org)
- ✅ Canonical URLs
- ✅ Mobile-friendly viewport
- ✅ Fast page load times
- ✅ Accessible markup

## ⚡ Performance Optimization

### Implemented Optimizations

1. **Code Splitting**
   - Vendor chunks separated (React, animations)
   - Route-based code splitting

2. **Image Optimization**
   - Lazy loading for images
   - Proper alt attributes
   - Responsive images

3. **Build Optimizations**
   - Minified CSS and JavaScript
   - Tree shaking
   - Asset optimization

4. **Runtime Optimizations**
   - React.memo for expensive components
   - useMemo and useCallback where appropriate
   - Optimized re-renders

### Performance Metrics

Target metrics:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

#### Vercel (Recommended)

**Option 1: Deploy via Vercel Dashboard**
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite and configure settings
6. Click "Deploy"

**Option 2: Deploy via Vercel CLI**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` (for preview) or `vercel --prod` (for production)
3. Follow the prompts to link your project

**Vercel Configuration:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

The `vercel.json` file is already configured for optimal deployment.

**Environment Variables:**
Set these in Vercel Dashboard → Settings → Environment Variables:
- `VITE_SITE_URL` - Your production URL (e.g., `https://tescaregroup.com.au`)
- Any other environment variables your app needs

**Custom Domain:**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

#### Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`

#### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

### Environment Configuration

Update the following in production:
- Update `index.html` meta tags with production URL
- Update SEO component with production URL
- Configure environment variables
- Set up analytics (if needed)

## 🔐 Authentication

### Admin Login

Default credentials (change in production):
- Username: `admin`
- Password: `TESCare2024!`

**⚠️ Important**: Change the default password in `src/utils/auth.js` before deploying to production.

### Protected Routes

Routes protected with `AuthGuard`:
- `/admin` - Admin dashboard

## 🎨 Customization

### Colors

Custom colors are defined in `src/index.css`:
- Navy: `#002147`
- Navy Dark: `#001530`
- Navy Light: `#003366`
- Gold: `#D4AF37`
- Gold Light: `#F4E6B0`

### Fonts

Custom fonts:
- Heading: Montserrat, Poppins
- Body: Open Sans, Roboto

### Tailwind Configuration

Tailwind CSS v4 is configured via CSS in `src/index.css` using the `@theme` directive.

## 📝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit your changes: `git commit -m 'Add amazing feature'`
3. Push to the branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

### Code Standards

- Follow ESLint rules
- Write tests for new features
- Update documentation
- Follow existing code style

## 🐛 Troubleshooting

### Common Issues

**Tailwind classes not working**
- Restart the dev server
- Clear browser cache
- Check `src/index.css` for Tailwind import

**Build errors**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

**Tests failing**
- Clear test cache: `npm test -- --clearCache`

## 📄 License

This project is proprietary software for TES Care Group.

## 📞 Support

For support, contact:
- Email: [info@tescaregroup.com.au](mailto:info@tescaregroup.com.au)
- Phone: +61 XXX XXX XXX

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the fast build tool
- Tailwind CSS for the utility-first CSS framework
- All contributors and open-source libraries used

---

**Built with ❤️ for TES Care Group**
