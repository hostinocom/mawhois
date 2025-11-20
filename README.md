# 🌐 WHOIS Maroc

A modern domain search and WHOIS lookup application built with Astro 5, React, and TailwindCSS v4. Search for domain availability across multiple registries including .ma (Morocco), .com, .fr, .uk, .de, and .es.

## ✨ Features

- 🔍 **Multi-Registry Domain Search** - Search across 6 different domain registries
- 🎯 **Smart Domain Validation** - Automatic extension detection and validation
- 📊 **WHOIS Information Display** - Detailed domain registration information
- 🎨 **Modern UI** - Built with TailwindCSS v4 for a clean, responsive design
- ⚡ **Fast Performance** - Powered by Astro 5 with optimized SSR
- 🔄 **Dynamic Results** - Real-time domain availability checking
- 💾 **User Preferences** - Remembers your preferred domain registry

## 🚀 Tech Stack

- **Framework:** [Astro 5.15.9](https://astro.build)
- **UI Library:** [React 19.2.0](https://react.dev)
- **Styling:** [TailwindCSS 4.1.17](https://tailwindcss.com)
- **Language:** TypeScript
- **Node Adapter:** @astrojs/node for SSR

## 📁 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── whoisma-wh.png          # Logo
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   └── Header.astro
│   │   ├── sections/           # Page sections
│   │   │   ├── Description.astro
│   │   │   ├── Hero.astro
│   │   │   └── SearchResults.astro
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.astro
│   │       └── DomainSearchForm.tsx
│   ├── config/
│   │   └── registries.ts       # Domain registry configuration
│   ├── layouts/
│   │   └── Layout.astro        # Base layout
│   ├── pages/
│   │   ├── api/
│   │   │   └── whois-ma.ts     # WHOIS API endpoint
│   │   └── index.astro         # Home page
│   └── styles/
│       └── global.css          # Global styles & CSS variables
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Color Scheme

The application uses a custom color palette defined in `src/styles/global.css`:

- **Primary:** `#00CC61` (Green) - CTAs and interactive elements
- **Secondary:** `#022545` (Dark Blue) - Header and hero backgrounds

## 🔧 Configuration

### Adding New Domain Registries

Edit `src/config/registries.ts` to add new domain registries:

```typescript
{
  code: 'registry-code',
  name: 'Display Name (.ext)',
  placeholder: 'Search placeholder text',
  extension: '.ext'
}
```

### Customizing Styles

- Global styles and CSS variables: `src/styles/global.css`
- Component-specific styles: Within each `.astro` file
- TailwindCSS configuration: Uses TailwindCSS v4 via Vite plugin

## 📝 API Endpoints

- **POST `/api/whois-ma`** - Domain availability check and WHOIS lookup
  - Query parameter: `domain` (e.g., `?domain=example.ma`)
  - Returns: Domain availability status and WHOIS information

## 🚀 Getting Started

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd whoisma
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📦 Building for Production

```sh
npm run build
npm run preview
```

## 📄 License

This project is open source and available under the MIT License.

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
