# jesper-x-alpheya

This is my submission for the Alpheya Next.js coding test. I've started on March 23th and finished on March 25th, 2025.

## Demo

Vercel deployment: https://jesper-x-alpheya.vercel.app

## About

The project is based on the Next.js `with-supabase` template: https://github.com/vercel/next.js/tree/canary/examples/with-supabase

Libraries I've used:

- [Next.js 15](https://nextjs.org/) for the app router.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Supabase](https://supabase.com/) for authentication and storage.
- [Framer Motion](https://www.framer.com/motion/) for animations.
- [Conform](https://conform.guide/) and [Zod](https://zod.dev/) for form handling and validation.
- [Lucide](https://lucide.dev/) for icons.
- [React Dropzone](https://react-dropzone.js.org/) for file upload.

## Features

- [x] Landing page
- [x] YouTube video player
- [x] Testimonials with auto-rotation every 5 seconds
- [x] Sign up with email and password
- [x] Sign in with Google
- [x] Sign in with Facebook
- [x] Sign in with Twitter
- [x] Sign out
- [x] Protected `/profile` route
- [x] File upload
- [x] File list of uploaded files

## Usage

### Development

```bash
npm install
npm run dev
```

### Production

```bash
npm install
npm run build
npm run start
```
