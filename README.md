# Lumisync Landing Page & Marketing Site

This repository contains the source code for the official public-facing marketing and landing website for **Lumisync** — Campus life, in motion.

- 🌐 **Live Website:** [https://lumisync-website.vercel.app](https://lumisync-website.vercel.app)
- 📱 **Main Client Application Repo:** [https://github.com/ompatil0305/lumisync](https://github.com/ompatil0305/lumisync)

---

## 📖 Overview

Lumisync is split into two distinct repositories to maintain clean separations of concerns, performance optimization, and SEO:

1. **`lumisync_website` (This Repository):** A server-side rendered (SSR) web application focused on public information, product description, SEO metadata, documentation, and student onboarding.
2. **`lumisync` (App Repository):** A client-rendered Single Page Application (SPA) dashboard containing all campus features (maps, dining, events, parking, shuttle tracking, and the Lumi AI assistant).

---

## 🛠 Technology Stack

This landing website is built using:
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Vanilla CSS structure)
- **Animations:** Framer Motion (premium smooth UI transitions)

---

## 🚀 Local Development Setup

Follow these commands to get the landing site running locally:

### 1. Clone the repository
```bash
git clone https://github.com/ompatil0305/lumisync_website.git
cd lumisync_website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 4. Build and Preview Production
```bash
npm run build
npm run start
```

---

## 📄 License

This project is licensed under the GNU General Public License v3 (GPLv3) - a strong copyleft license. See the [LICENSE](LICENSE) file for details.

