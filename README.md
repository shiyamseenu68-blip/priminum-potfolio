# Shiyam Portfolio 🚀

A premium, award-winning style personal portfolio website for Shiyam — a passionate web developer from India.

## ✨ Features

- **Cinematic Hero Section** with animated typing effect, particle background, and spotlight
- **Glassmorphism Design** throughout with gradient borders and blur effects
- **Smooth Animations** using Framer Motion with scroll-triggered reveals
- **12 Project Cards** with live links, status badges, and hover effects
- **Animated Skills Grid** with 12 technologies
- **Interactive Timeline** showing learning journey
- **GitHub Stats Dashboard** with counters and contribution graph
- **Contact Form** with copy-to-clipboard functionality
- **Social Links** with brand-colored hover effects
- **Loading Screen** with progress animation
- **Custom Cursor Glow** effect
- **Scroll Progress Indicator**
- **Back to Top Button**
- **Fully Responsive** for all devices
- **SEO Optimized** with meta tags

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite (Build Tool)
- Tailwind CSS
- Framer Motion (Animations)
- Lucide React (Icons)
- react-countup (Animated counters)

## 📦 Installation

```bash
# Clone or extract the project
cd shiyam-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Project Structure

```
shiyam-portfolio/
├── src/
│   ├── components/
│   │   ├── LoadingScreen.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── CursorGlow.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── BackToTop.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Features.tsx
│   │   ├── Timeline.tsx
│   │   ├── Certifications.tsx
│   │   ├── Resume.tsx
│   │   ├── GitHubStats.tsx
│   │   ├── Socials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useMousePosition.ts
│   │   ├── useScrollProgress.ts
│   │   └── useInView.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Update Profile Picture
Replace the image URL in `src/components/Hero.tsx` with your own:
```tsx
<img src="YOUR_IMAGE_URL" alt="Shiyam" />
```

### Update Projects
Edit the `projects` array in `src/components/Projects.tsx`

### Update Contact Info
Edit `src/components/Contact.tsx`

### Update Colors
Modify the Tailwind config and CSS variables in `src/index.css`

## 📱 Sections Included

1. **Hero** — Animated intro with typing effect, stats, and CTAs
2. **About Me** — Bio, skills list, and motivational quote
3. **Skills** — 12 animated skill cards with icons
4. **Projects** — 12 project cards with links and status badges
5. **Features** — 8 animated feature cards with counters
6. **Timeline** — 9-step learning journey visualization
7. **Certifications** — Placeholder for future certifications
8. **Resume** — Resume preview with download button
9. **GitHub Stats** — Stats dashboard with language breakdown
10. **Socials** — GitHub, LinkedIn, Instagram links
11. **Contact** — Contact info + message form
12. **Footer** — Copyright and navigation

## 🚀 Deployment

Build the project:
```bash
npm run build
```

Deploy the `dist` folder to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

## 📄 License

© 2026 Shiyam. All rights reserved.

---

**Built with ❤️ by Shiyam**
*Always Learning. Always Building.*
