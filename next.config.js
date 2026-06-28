# Local Lawncare

Professional lawn care website with booking and team dashboard.

## Stack
- **Next.js 14** (App Router)
- **Supabase** (database + auth)
- **Vercel** (hosting)

## Setup

### 1. Clone and install
```bash
git clone <your-repo-url>
cd local-lawncare
npm install
```

### 2. Set up Supabase
1. Create a project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the full contents of `supabase-schema.sql`
3. In Authentication > URL Configuration, add your Vercel URL to "Redirect URLs"
4. In Authentication > Email, enable "Magic Link"

### 3. Add team members to Supabase
In the Supabase Table Editor, add rows to the `team_members` table:
- name: "Boy 1 Name", email: "boy1@email.com"
- name: "Boy 2 Name", email: "boy2@email.com"

### 4. Environment variables
Copy `.env.local.example` to `.env.local` and fill in your Supabase values:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```
Find these in Supabase > Project Settings > API.

### 5. Run locally
```bash
npm run dev
```
Visit http://localhost:3000

## Deploy to Vercel
1. Push to GitHub
2. Import repo in Vercel
3. Add environment variables in Vercel project settings
4. Deploy — Vercel auto-deploys on every push to main

## Pages
- `/` — Public site: hero, pricing, booking
- `/dashboard` — Team only: magic link login, manage availability, view bookings
