# Quick Start Guide

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with metadata & fonts
│   ├── page.tsx           # Home page (imports all sections)
│   └── globals.css        # Global styles & animations
├── components/
│   ├── PhoneParallax.tsx  # Main animated phone component
│   ├── phone-content.tsx  # Phone screen content for each app
│   ├── Footer.tsx         # Footer component
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Hero with animated stats
│       ├── Projects.tsx   # 4 featured projects
│       ├── Skills.tsx     # 6 skill categories
│       ├── Experience.tsx # Work history
│       └── Contact.tsx    # Contact info & social links
```

## Key Technologies

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Animation System

### Phone Parallax (PhoneParallax.tsx)
- **Scroll tracking**: `useScroll()` hook from Framer Motion
- **Rotation**: 0° to 1080° (3 full rotations)
- **Horizontal movement**: Oscillates in wave pattern
- **Vertical movement**: Moves down with scroll
- **Content switching**: Based on section visibility

### Section Animations
- **Intersection Observer**: Only animate when visible
- **Staggered delays**: Sequential animation of elements
- **Smooth transitions**: Framer Motion's motion components

## Customization Tips

### Change Colors
Edit `tailwind.config.js` or use Tailwind classes directly.

### Modify Animation Speed
In `PhoneParallax.tsx`, adjust the transform ranges:
```tsx
const rotation = useTransform(scrollYProgress, [0, 1], [0, 2160]) // 6 rotations
```

### Add New Projects
Edit the `projects` array in `components/sections/Projects.tsx`.

### Update Phone Content
Add new screens in `components/phone-content.tsx`.

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

Or push to GitHub and connect to Vercel dashboard.

### Other Platforms
Build first, then deploy:
```bash
npm run build
npm run start
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
PORT=3001 npm run dev
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check TypeScript errors
npm run lint
# Clear Next.js cache
rm -rf .next
npm run build
```

## Support

For issues or questions:
- Email: kunaljain0809@gmail.com
- GitHub: [@kunaljain0809](https://github.com/kunaljain0809)

## License

Created by Kunal Jain © 2024
