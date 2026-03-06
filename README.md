# Bui Dinh Bao — Portfolio

> 🌐 Live at **[fabyanbui.github.io/portfolio](https://fabyanbui.github.io/portfolio/)**

Personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Deployed automatically to GitHub Pages via GitHub Actions.

---

## ✨ Features

- **Modern dark design** with glassmorphism cards and cyan accent color
- **Smooth animations** powered by Framer Motion (scroll-triggered, entrance effects)
- **Fully responsive** — works on mobile, tablet, and desktop
- **Static export** — zero server required, perfect for GitHub Pages
- **Auto-deploy** — push to `main` and GitHub Actions builds & deploys

---

## 🗂 Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, objective, social links |
| **About** | Education (HCMUS · CGPA 3.75/4.0) and objective |
| **Skills** | Programming, ML/AI, Data, Testing, Engineering |
| **Experience** | Parsie — Founding Engineer / AI Engineer |
| **Projects** | 6 featured projects with tags and highlights |
| **Certificates** | Google certifications + TOEIC scores |
| **Contact** | Email, phone, GitHub, LinkedIn |

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14 | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animations |
| [Lucide React](https://lucide.dev/) | latest | Icons |
| [GitHub Actions](https://github.com/features/actions) | — | CI/CD deploy |

---

## 🚀 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/fabyanbui/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## 🏗 Build & Deploy

```bash
# Build for production (outputs to /out)
npm run build

# Preview the production build locally
npx serve out
```

Deployment is **fully automated**:
1. Push to the `main` branch
2. GitHub Actions runs `npm run build`
3. The `/out` static folder is deployed to GitHub Pages

> **GitHub Pages Setup:** Go to **Settings → Pages → Source** and select **GitHub Actions**.

---

## 📁 Project Structure

```
portfolio/
├── app/                   # Next.js App Router
│   ├── globals.css        # Global styles + Tailwind directives
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Home page (assembles all sections)
├── components/            # React components (one per section)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts            # All portfolio content (edit here!)
├── public/
│   └── .nojekyll          # Required for GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions auto-deploy
└── next.config.mjs        # Next.js config (static export + basePath)
```

---

## ✏️ Customization

All portfolio content lives in **`lib/data.ts`** — edit that single file to update:
- Personal info, email, social links
- Education details
- Skills categories
- Work experience
- Projects
- Certificates

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio.

---

<p align="center">Built with ❤️ by <a href="https://github.com/fabyanbui">Bui Dinh Bao</a></p>
