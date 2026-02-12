# Kunal Jain - Portfolio

A stunning, interactive portfolio website built with **Next.js 14**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**. Features scroll-based parallax animations with a 3D mobile phone mockup.

## 🚀 Features

- **Next.js 14 App Router**: Modern React framework with server-side rendering
- **TypeScript**: Full type safety across the application
- **Framer Motion**: Smooth, production-grade animations
- **Scroll-Based Parallax Animation**: A 3D mobile phone that moves, rotates 360°, and oscillates left-right as you scroll
- **Dark Theme with Gradient**: Beautiful moon-shaped gradient background with animated elements
- **Interactive Phone Content**: Phone screen dynamically updates based on the section being viewed
- **Smooth Animations**: Fade-in effects, counter animations, and hover effects with Framer Motion
- **Responsive Design**: Optimized for all screen sizes
- **Performance Optimized**: React Server Components, lazy loading, and optimized animations for smooth 60fps

## 📱 Phone Animation Details

The mobile phone mockup features:
- **Vertical Movement**: Moves down as you scroll through the page
- **360° Rotation**: Completes 3 full rotations throughout the entire page scroll
- **Horizontal Oscillation**: Smoothly moves from center → right → center → left → center in a wave pattern
- **Dynamic Content**: Shows different app screens based on the current section:
  - Hero: Profile information
  - Projects: E-commerce, Food Delivery, FinTech, and AI apps
  - Skills: E-commerce app
  - Experience: Food delivery app
  - Contact: Profile information

## 🎨 Design Highlights

### Dark Theme with Gradient
- Black background (#000)
- Moon-shaped gradient with blue, purple, and pink hues
- Pulsing animation for depth and visual interest
- Subtle lighting effects

### Sections
1. **Hero**: Introduction with animated stats
2. **Projects**: 4 major production projects with live metrics
3. **Skills**: 6 technical expertise categories
4. **Experience**: Work history with detailed descriptions
5. **Contact**: Multiple contact methods with social links

## 🛠️ Tech Stack

### Framework & Libraries
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type-safe JavaScript
- **Framer Motion** - Production-ready animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📊 Technologies Showcased in Projects

- **MoQuick Start

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone or navigate to the portfolio folder**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

The easiest way to deploy this Next.js app:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

1. **Open the Portfolio**:
   - Simply open `index.html` in a modern web browser
   - No build process or dependencies required!

2. **Navigate**:
   - Scroll naturally through the page
   - Watch the phone animate and change content
   -Architecture
- **Next.js App Router**: Modern file-based routing with React Server Components
- **Component-Based**: Modular, reusable components for maintainability
- **TypeScript**: Full type safety preventing runtime errors
- **CSS-in-JS**: Tailwind utility classes with custom CSS for complex animations

### Parallax Animation (Framer Motion)
The phone animation uses:
- `useScroll()` hook for scroll progress tracking
- `useTransform()` for smooth value interpolation
- Y-axis rotation: 0° to 1080° (3 full rotations) 
- X-axis oscillation: Creates wave pattern (center → right → center → left → center)
- Y-axis translation: Moves phone down as user scrolls
- Dynamic content switching based on scroll position

### Performance Optimizations
- **React Server Components**: Reduced client-side JavaScript
- **Intersection Observer**: Trigger animations only when visible
- **Framer Motion**: Hardware-accelerated CSS transforms
- **Lazy Loading**: Code splitting with Next.js dynamic imports
- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Next.js font optimization with `next/font`

### 2. Restaurant Delivery App (Fyre Gig)
- **Status**: Live ✅
- **Tech**: Flutter, Firebase, Google Maps, WebSocket
- **Users**: 1000+ active users
- **Delivery**: 25 min average

### 3. Loan & Finance App
- **Status**: Live ✅
- **Tech**: Flutter, Node.js, PostgreSQL, JWT
- **Users**: 200+ active loans
- **Uptime**: 99.9%

### 4. AI Fire NOC Inspection
- **Status**: Completed 🎯
- **Tech**: Flutter, Express, AI Image Hashing, Geolocation
- **Accuracy**: 95%
- **Type**: Final Year Project

## 💡 Technical Implementation

### Parallax Animation
The phone animation uses:
- `requestAnimationFrame` for smooth 60fps performance
- Scroll progress calculation for precise positioning
- Sine wave function for oscillation pattern
- Multiple rotation cycles (1080° total = 3 full rotations)
- Dynamic content switching based on viewport position

### Performance Optimizations
- Throttled scroll events
- Lazy loading for animations
### Project Structure
```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── PhoneParallax.tsx   # Animated phone component
│   ├── phone-content.tsx   # Phone screen content
│   ├── Footer.tsx          # Footer component
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       └── Contact.tsx
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

### Customi90+ (recommended)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Modern mobile browsers (iOS 14+, Android 10+)

Requires JavaScript enabled. Optimized for modern browsers with CSS Grid, Flexbox, and CSS transforms support
2. **Modify Projects**:
   - Edit the `projects` array in `components/sections/Projects.tsx`
   - Update phone content in `components/phone-content.tsx`
   - Add new project types and customize colors

3. **Adjust Animations**:
   - Modify Framer Motion transforms in `components/PhoneParallax.tsx`
   - Change rotation range: `useTransform(scrollYProgress, [0, 1], [0, 1080])`
   - Adjust oscillation points: `[0, 0.25, 0.5, 0.75, 1]` and `['0%', '30%', '0%', '-30%', '0%']`
   - Update timing and easing in section components

4. **Theme Colors**:
   - Update gradient colors in `app/globals.css` (`.gradient-moon`)
   - Modify Tailwind theme in `tailwind.config.js`
   - Change project card gradients in Projects componenter for rotation speed
   - Change `oscillations` value for horizontal movement pattern
   - Adjust timing functions in CSS for different effects

4. **Theme Colors**:
   - Update gradient colors in `.gradient-moon` CSS
   - Modify project card colors
   - Change button and accent colors

## 🌟 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Modern mobile browsers

Requires JavaScript enabled for animations.

## 📞 Contact Information

- **Email**: kunaljain0809@gmail.com
- **Phone**: +91-7738815664
- **Location**: Mumbai, India
- **GitHub**: [kunaljain0809](https://github.com/kunaljain0809)
- **LinkedIn**: [kunaljain0809](https://linkedin.com/in/kunaljain0809)

## 📄 License

This portfolio is created by Kunal Jain. Feel free to use as inspiration, but please don't copy directly.

---

**Built with passion and code** ❤️
