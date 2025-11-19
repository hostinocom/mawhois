# React Integration Guide - WHOIS Maroc

## 🎯 Overview

The domain search form has been refactored from vanilla JavaScript to **React** for better state management, improved developer experience, and enhanced maintainability.

## 📦 Installation & Setup

### 1. **Install React Integration**

Following the [official Astro React documentation](https://docs.astro.build/en/guides/integrations-guide/react/), we installed:

```bash
npm install @astrojs/react react react-dom @types/react @types/react-dom
```

### 2. **Configure Astro**

Updated `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### 3. **Configure TypeScript**

Updated `tsconfig.json` to support React JSX:

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"],
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

## 🏗️ Architecture

### **Before (Vanilla JS)**
```
Hero.astro
├── HTML Form
├── <script> tag with vanilla JS
│   ├── DOM manipulation
│   ├── Event listeners
│   └── Form validation
└── <style> for form styling
```

### **After (React)**
```
Hero.astro
├── React component import
├── <DomainSearchForm client:load />
└── Minimal styling

DomainSearchForm.tsx (React)
├── useState for state management
├── useEffect for side effects
├── Type-safe props (TypeScript)
├── Declarative JSX
└── Component logic encapsulation
```

## 🔧 Component Breakdown

### **Hero.astro** (Astro Wrapper)
```astro
---
import DomainSearchForm from './DomainSearchForm';

interface Props {
  registries: Array<{...}>;
  defaultRegistry: {...};
}

const { registries, defaultRegistry } = Astro.props;
---

<section>
  <h1>Recherche d'un domaine...</h1>
  
  <!-- React component with client directive -->
  <DomainSearchForm 
    client:load 
    registries={registries} 
    defaultRegistry={defaultRegistry} 
  />
</section>
```

### **DomainSearchForm.tsx** (React Component)
```tsx
import { useState, useEffect } from 'react';

interface DomainSearchFormProps {
  registries: Registry[];
  defaultRegistry: Registry;
}

export default function DomainSearchForm({ 
  registries, 
  defaultRegistry 
}: DomainSearchFormProps) {
  const [domainInput, setDomainInput] = useState('');
  const [selectedExtension, setSelectedExtension] = useState(defaultRegistry.extension);
  
  // Component logic...
  
  return <form>...</form>;
}
```

## ⚡ Client Directives

We use `client:load` directive to hydrate the component immediately:

```astro
<DomainSearchForm client:load {...props} />
```

### **Available Directives:**
- `client:load` - Hydrate immediately ✅ (Current)
- `client:idle` - Hydrate when browser is idle
- `client:visible` - Hydrate when component is visible
- `client:media` - Hydrate based on media query
- `client:only` - Only render on client

**Why `client:load`?**
- Search form is critical functionality
- User expects immediate interactivity
- Small bundle size impact

## 🎨 Features Migrated to React

### **1. State Management**
**Before (Vanilla JS):**
```javascript
let domainValue = domainInput.value;
let selectedExtension = registrySelect.value;
```

**After (React):**
```tsx
const [domainInput, setDomainInput] = useState('');
const [selectedExtension, setSelectedExtension] = useState(defaultRegistry.extension);
```

### **2. Event Handling**
**Before (Vanilla JS):**
```javascript
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // validation logic...
});
```

**After (React):**
```tsx
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // validation logic...
};

<form onSubmit={handleSubmit}>
```

### **3. Side Effects**
**Before (Vanilla JS):**
```javascript
// Scattered throughout script
const savedExtension = localStorage.getItem('selectedExtension');
const urlParams = new URLSearchParams(window.location.search);
```

**After (React):**
```tsx
useEffect(() => {
  // Load from localStorage
  const savedExtension = localStorage.getItem('selectedExtension');
  
  // Load from URL params
  const urlParams = new URLSearchParams(window.location.search);
  
  // All side effects in one place
}, [registries, defaultRegistry]);
```

### **4. Dynamic Updates**
**Before (Vanilla JS):**
```javascript
registrySelect.addEventListener('change', (e) => {
  domainInput.placeholder = selectedRegistry.placeholder;
});
```

**After (React):**
```tsx
const handleExtensionChange = (e: ChangeEvent<HTMLSelectElement>) => {
  setSelectedExtension(e.target.value);
  // Placeholder updates automatically via state
};
```

## ✅ Benefits of React Integration

### **1. Better State Management**
- Centralized state with `useState`
- No manual DOM manipulation
- Predictable state updates

### **2. Type Safety**
- TypeScript interfaces for props
- Type-checked event handlers
- IDE autocomplete support

### **3. Declarative Code**
```tsx
// React (declarative - what to render)
<input 
  value={domainInput}
  onChange={(e) => setDomainInput(e.target.value)}
  placeholder={placeholder}
/>

// vs Vanilla JS (imperative - how to change)
domainInput.value = newValue;
domainInput.placeholder = newPlaceholder;
domainInput.addEventListener('change', handler);
```

### **4. Component Reusability**
- Can use in multiple pages
- Props-based configuration
- Isolated component logic

### **5. Easier Testing**
- Unit test React components
- Mock props easily
- Test user interactions

### **6. Better Developer Experience**
- Hot module replacement
- React DevTools support
- Component tree visualization

## 🚀 Performance Considerations

### **Bundle Size**
- React adds ~45KB (gzipped)
- Only loads on pages using the component
- Shared across all React components

### **Hydration Strategy**
- `client:load`: ~0-50ms hydration time
- Interactive immediately on page load
- No layout shift during hydration

### **Optimization Tips**
1. Use `client:idle` if not critical above-fold
2. Lazy load if component is below fold
3. Consider `client:visible` for better INP scores

## 🧪 Testing the Integration

### **Test Checklist:**
- [ ] Form renders correctly
- [ ] Domain input works
- [ ] Extension selector updates placeholder
- [ ] Form validation shows errors
- [ ] LocalStorage persistence works
- [ ] URL params pre-fill form
- [ ] Submit redirects correctly
- [ ] Smooth transitions/animations
- [ ] Mobile responsive
- [ ] Keyboard navigation
- [ ] Screen reader accessible

### **Development Commands:**
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Migration Summary

### **Files Changed:**
- ✅ `astro.config.mjs` - Added React integration
- ✅ `tsconfig.json` - Added React JSX config
- ✅ `package.json` - Added React dependencies
- ✅ `src/components/Hero.astro` - Removed vanilla JS, added React component
- ✅ `src/components/DomainSearchForm.tsx` - New React component
- ✅ `src/styles/global.css` - Moved shared styles here

### **Lines of Code:**
- **Before**: ~170 lines (Hero.astro with vanilla JS)
- **After**: ~50 lines (Hero.astro) + ~180 lines (DomainSearchForm.tsx)
- **Net**: More organized, type-safe, and maintainable

### **Functionality:**
All features preserved:
- ✅ Smart extension detection
- ✅ Domain validation with regex
- ✅ Dynamic placeholder updates
- ✅ LocalStorage persistence
- ✅ URL parameter handling
- ✅ Form pre-fill
- ✅ Error messages
- ✅ Smooth transitions

## 🎓 Key Learnings

### **1. Astro Islands Architecture**
- Server-render Astro components
- Selectively hydrate React components
- Best of both worlds: SSR + interactivity

### **2. Client Directives**
- Control when JavaScript loads
- Optimize for performance
- Choose right directive for use case

### **3. Props Passing**
- Pass data from Astro → React
- Type-safe with TypeScript
- Serialize-able data only (no functions)

### **4. Styling**
- Global CSS applies to React components
- TailwindCSS works seamlessly
- Scoped styles in Astro, not React

## 🔮 Future Enhancements

### **Potential Improvements:**
1. **Form Library**: Consider React Hook Form for advanced validation
2. **Animation Library**: Framer Motion for complex animations
3. **Accessibility**: Add aria-live regions for dynamic updates
4. **Error Handling**: Toast notifications with React hot toast
5. **Loading States**: Spinner during validation
6. **Debouncing**: Debounce input for better UX
7. **Autocomplete**: Domain suggestions as you type

## 📚 Resources

- [Astro React Integration Docs](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Astro Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Astro Islands Architecture](https://docs.astro.build/en/concepts/islands/)

## ✨ Conclusion

The React integration provides:
- ✅ **Better DX**: Type-safe, declarative code
- ✅ **Maintainability**: Organized component logic
- ✅ **Performance**: Selective hydration with islands
- ✅ **Scalability**: Easy to add more interactive features
- ✅ **Modern Stack**: Industry-standard tooling

The search form is now more robust, maintainable, and ready for future enhancements! 🚀

