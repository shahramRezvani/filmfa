# FilmFA

A Persian-language video streaming platform (like Netflix) with user authentication, subscription (Stripe), video catalog, player, and admin dashboard for content management.

## Features
- User authentication (register, login, OTP, password reset)
- Subscription management with Stripe payments
- Video browsing, search, genre filtering
- Video player with quality selection and subtitles
- Admin panel for managing videos, genres, users, and analytics
- RTL/Farsi UI with Tailwind CSS and Vazirmatn font
- Deployable to Vercel

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- NextAuth v5
- Prisma ORM (PostgreSQL via Vercel)
- Upstash Redis (sessions)
- Stripe API
- Docker & GitHub Actions CI/CD

## Getting Started
1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in secrets
3. Run `npm install`
4. Run `npm run dev` to start development server
5. Run `npm run build` and `npm start` for production

## License
MIT