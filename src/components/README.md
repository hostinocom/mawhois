# Components Directory

This directory contains reusable Astro components for the WHOIS Maroc landing page.

## Component Structure

### `Header.astro`
**Purpose:** Main navigation header with logo and menu
- Logo with link to home
- Navigation menu button
- Breadcrumb trail (Accueil / Whois Maroc)

**Usage:**
```astro
import Header from '../components/Header.astro';
<Header />
```

---

### `Hero.astro`
**Purpose:** Hero section with search functionality
- Main heading and title
- Domain search form with registry selector
- Dynamic placeholder based on selected registry
- LocalStorage persistence for user preferences

**Props:**
- `registries`: Array of registry objects
- `defaultRegistry`: Default registry object to display

**Usage:**
```astro
import Hero from '../components/Hero.astro';
<Hero registries={registries} defaultRegistry={defaultRegistry} />
```

---

### `Description.astro`
**Purpose:** Descriptive section explaining the WHOIS Maroc service
- Centered text content
- Mixed typography (normal, italic, serif)
- Fully responsive

**Usage:**
```astro
import Description from '../components/Description.astro';
<Description />
```

---

### `MoroccoFlag.astro`
**Purpose:** Decorative Morocco flag element
- Circular red background with green star
- Responsive sizing
- Hover animation effect

**Usage:**
```astro
import MoroccoFlag from '../components/MoroccoFlag.astro';
<MoroccoFlag />
```

---

### `SearchResults.astro`
**Purpose:** Display domain availability search results
- Shows domain availability status
- Available domains: displays pricing and registration options
- Unavailable domains: displays WHOIS information and suggestions
- Mock API integration for demonstration
- Smooth animations and transitions

**Props:**
- `domain`: Domain name to search (without extension)
- `extension`: Domain extension (e.g., .ma, .com)

**Usage:**
```astro
import SearchResults from '../components/SearchResults.astro';
<SearchResults domain="example" extension=".ma" />
```

**Conditional Display:**
This component is conditionally rendered in the index page when URL parameters `?domain=...&extension=...` are present.

---

## Component Best Practices

1. **Modularity**: Each component handles a specific section of the page
2. **Reusability**: Components can be imported and used in any page
3. **Props**: Use TypeScript interfaces for type-safe props
4. **Styling**: Scoped styles within each component
5. **Accessibility**: Semantic HTML with ARIA labels where needed

## Configuration & Services

### Registry Configuration
Registry data is centralized in `/src/config/registries.ts` for easy maintenance.

To add a new registry:
1. Open `src/config/registries.ts`
2. Add a new registry object to the array
3. The Hero component will automatically display it in the dropdown

### Domain API Service
Domain availability checking is handled by `/src/services/domainApi.ts`.

**Key Functions:**
- `checkDomainAvailability(domain, extension)` - Check if a domain is available
- `generateDomainSuggestions(domain, extension, count)` - Generate alternative domain suggestions
- `validateDomainName(domain)` - Validate domain name format

**Note:** Currently uses mock data for demonstration. Replace with real API calls in production by updating the `checkDomainAvailability` function.

## File Organization

```
src/
├── components/
│   ├── Header.astro        # Navigation header
│   ├── Hero.astro          # Hero section with search
│   ├── Description.astro   # Service description
│   ├── MoroccoFlag.astro   # Decorative flag element
│   ├── SearchResults.astro # Domain search results display
│   └── README.md           # This file
├── config/
│   └── registries.ts       # Registry configuration
├── services/
│   └── domainApi.ts        # Domain API service (mock)
├── layouts/
│   └── Layout.astro        # Base layout wrapper
└── pages/
    └── index.astro         # Main landing page (conditional rendering)
```

## How It Works

### Search Flow:
1. User enters domain name in the Hero search form
2. Form submits to `/?domain=example&extension=.ma`
3. Index page detects URL parameters
4. If parameters exist → show SearchResults component
5. If no parameters → show Description + MoroccoFlag components
6. SearchResults calls domainApi service to check availability
7. Results displayed with animations and suggestions

