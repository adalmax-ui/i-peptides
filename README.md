# i-peptides - E-commerce Store + Peptide Database

A modern, production-ready Next.js application for selling peptides with an integrated knowledge base.

## Features

### E-commerce
- ✅ Product catalog with filtering and sorting
- ✅ Shopping cart with persistent storage (Zustand)
- ✅ Stripe payment integration
- ✅ Order management system
- ✅ Inventory tracking

### Knowledge Base
- ✅ Comprehensive peptide database
- ✅ Linked products and peptides
- ✅ Research status indicators
- ✅ Safety notes and key points

### User Experience
- ✅ Advanced search with multi-term support
- ✅ Category and stock filters
- ✅ Toast notifications
- ✅ Loading states
- ✅ Error boundaries
- ✅ Responsive design (mobile & desktop)

### Developer Experience
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Prisma ORM for database
- ✅ NextAuth.js for authentication
- ✅ Form validation with Zod
- ✅ Vercel Analytics integration

### SEO & Performance
- ✅ Dynamic meta tags
- ✅ OpenGraph & Twitter cards
- ✅ Sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ Image optimization with Next.js Image

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL + Prisma ORM
- **Authentication:** NextAuth.js
- **Payments:** Stripe
- **State Management:** Zustand
- **Notifications:** React Hot Toast
- **Analytics:** Vercel Analytics
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Stripe account (for payments)

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd i-peptides
\`\`\`

2. Install dependencies:
\`\`\`bash
cd i-peptides-site
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env
\`\`\`

Edit `.env` and fill in your credentials:

\`\`\`env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/i-peptides"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="<generate-with-openssl-rand-base64-32>"

# Email (for magic link login)
EMAIL_SERVER="smtp://user@example.com:password@smtp.example.com:587"
EMAIL_FROM="noreply@i-peptides.example"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
\`\`\`

4. Set up the database:
\`\`\`bash
npm run prisma:migrate
npm run prisma:generate
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

\`\`\`
i-peptides-site/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/         # NextAuth.js endpoints
│   │   └── checkout/     # Stripe checkout
│   ├── shop/             # Product catalog
│   ├── peptides/         # Peptide database
│   ├── cart/             # Shopping cart
│   └── checkout/         # Checkout success
├── components/            # React components
│   ├── Cards.tsx         # Product & Peptide cards
│   ├── ErrorBoundary.tsx # Error handling
│   ├── SiteHeader.tsx    # Navigation
│   └── ui.tsx            # Reusable UI components
├── lib/                  # Utilities
│   ├── auth.ts          # NextAuth configuration
│   ├── cart.ts          # Zustand cart store
│   ├── db.ts            # Prisma client
│   ├── data.ts          # Mock data
│   ├── stripe.ts        # Stripe client
│   └── types.ts         # TypeScript types
├── prisma/              # Database schema
│   └── schema.prisma
└── public/              # Static assets
\`\`\`

## Key Features Explained

### Shopping Cart
Uses Zustand with persistence to localStorage. Cart items sync across tabs.

### Stripe Integration
- Checkout creates a session and redirects to Stripe
- Success page clears cart and shows confirmation
- Webhook endpoint ready for production (needs to be added)

### Authentication
NextAuth.js with email magic link provider. Easily add OAuth providers (Google, GitHub, etc.)

### Database Schema
Prisma schema includes:
- Users & Sessions (NextAuth)
- Products & Categories
- Peptides & Aliases
- Orders & Order Items
- Addresses

### SEO
- Dynamic meta tags per page
- Sitemap auto-generated from data
- Structured data ready for implementation

## Development Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

Vercel will automatically:
- Build the Next.js app
- Set up PostgreSQL (with Vercel Postgres)
- Configure analytics

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- AWS Amplify
- Netlify
- Railway
- Render

## Configuration

### Stripe Webhooks

For production, set up a webhook endpoint at `/api/webhooks/stripe` to handle:
- `checkout.session.completed`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`

### Email Configuration

For production emails, configure:
- SendGrid
- AWS SES
- Postmark
- Resend

## Security Considerations

1. **Input Validation**: All forms use validation (quantity limits, etc.)
2. **Authentication**: NextAuth.js with secure session handling
3. **Payments**: Stripe handles all payment data (PCI compliant)
4. **Environment Variables**: Never commit .env files
5. **Database**: Use connection pooling for production
6. **Rate Limiting**: Add rate limiting to API routes in production

## TODO for Production

- [ ] Add product images (replace Unsplash URLs)
- [ ] Write actual product descriptions
- [ ] Add legal pages content (Terms, Privacy, Disclaimer)
- [ ] Set up email templates
- [ ] Configure Stripe webhook handlers
- [ ] Add admin panel for managing products
- [ ] Implement order confirmation emails
- [ ] Add customer support ticketing system
- [ ] Set up monitoring (Sentry, LogRocket)
- [ ] Add rate limiting
- [ ] Configure CDN for images

## Support

For questions or issues, contact: [your-email@example.com]

## License

Proprietary - All rights reserved

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
