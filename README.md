# DRH Media - Marketing Agency Website

A modern, high-performance Next.js website optimized for Coolify deployment.

## Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Styled with Tailwind CSS
- 🐳 Docker-ready for Coolify deployment
- 📱 Fully responsive design
- 🚀 Optimized for performance

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment to Coolify

This project is pre-configured for easy deployment to Coolify:

1. **Push to Git**: Push your code to a Git repository (GitHub, GitLab, etc.)

2. **Connect to Coolify**: 
   - Create a new project in Coolify
   - Connect your Git repository
   - Coolify will automatically detect the Dockerfile

3. **Deploy**: 
   - Click "Deploy" and Coolify will build and run your application
   - The app will be available on port 3000

### Environment Variables

No environment variables are required for the basic setup. If you need to add any:

1. Go to your Coolify project settings
2. Add environment variables in the "Environment Variables" section
3. Redeploy

## Project Structure

```
dineably/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
├── public/                  # Static assets
├── Dockerfile              # Docker configuration
├── next.config.js          # Next.js configuration
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Customization

### Colors and Styling

Edit `src/app/globals.css` and `tailwind.config.ts` to customize colors and design tokens.

### Content

Edit `src/app/page.tsx` to update content, navigation links, and CTAs.

### Adding Animations

This project is ready for animations. You can add libraries like:
- Framer Motion: `npm install framer-motion`
- GSAP: `npm install gsap`
- React Spring: `npm install react-spring`

## Support

For issues or questions, please open an issue in the repository.

