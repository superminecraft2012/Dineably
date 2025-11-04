# Quick Start Guide

Get your DRH Media website up and running in minutes!

## 🚀 Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Your site will be available at [http://localhost:3000](http://localhost:3000)

## 📦 Production Build

### Test Production Build Locally

```bash
npm run build
npm start
```

### Using Docker

```bash
# Build the image
docker build -t drh-media .

# Run the container
docker run -p 3000:3000 drh-media
```

### Using Docker Compose

```bash
docker-compose up
```

## 🌐 Deploy to Coolify

### Quick Deploy (3 Steps!)

1. **Push to Git**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

2. **Create Project in Coolify**
   - Log in to Coolify
   - Click "New Project"
   - Select "Public Repository" or "Private Repository"
   - Enter your repository URL
   - Branch: `main`
   - Build Pack: Dockerfile (auto-detected)

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live! 🎉

### Domain Setup

In Coolify:
1. Go to your project settings
2. Add your domain (e.g., `drhmedia.com`)
3. Coolify automatically sets up SSL

## 🎨 Customization

### Update Content

Edit `src/app/page.tsx` to change:
- Headlines
- Button text
- Partner logos
- Navigation links

### Styling

Edit `src/app/globals.css` and `tailwind.config.ts` for:
- Colors
- Fonts
- Spacing
- Animations

### Add Pages

Create new pages in `src/app/`:

```bash
src/app/
├── about/
│   └── page.tsx
├── services/
│   └── page.tsx
└── contact/
    └── page.tsx
```

## 🎬 Adding Animations

### Install Framer Motion

```bash
npm install framer-motion
```

### Example Usage

```tsx
'use client'
import { motion } from 'framer-motion'

export default function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content here
    </motion.div>
  )
}
```

## 🛠️ Troubleshooting

### Port Already in Use

If port 3000 is busy:

```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Docker Issues

```bash
# Remove old containers and images
docker-compose down
docker system prune -a

# Rebuild
docker-compose up --build
```

## 📚 Next Steps

1. ✅ Customize content and styling
2. ✅ Add more pages
3. ✅ Implement animations
4. ✅ Set up analytics
5. ✅ Connect contact forms
6. ✅ Add CMS (optional)

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Coolify Docs](https://coolify.io/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 💡 Tips

- Use `'use client'` directive for interactive components
- Optimize images with Next.js `<Image>` component
- Keep components small and reusable
- Use TypeScript for better code quality
- Test on mobile devices regularly

Happy coding! 🚀

