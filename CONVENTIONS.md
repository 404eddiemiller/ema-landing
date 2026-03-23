# CONVENTIONS.md — Conventions de Code

## Langage et commentaires

- **Contenu visible** : Tout en français.
- **Commentaires de code** : En anglais.
- **Noms de fichiers** : En anglais, kebab-case (`how-it-works.astro`, pas `CommentCaMarche.astro`).
- **Noms de composants Astro** : PascalCase (`HowItWorks.astro`).
- **Variables CSS custom** : kebab-case avec préfixe sémantique (`--color-terracotta`, `--space-lg`).
- **Classes Tailwind** : Ordre logique — layout → sizing → spacing → typography → color → border → effect.

## Structure des fichiers

```
src/
├── layouts/
│   └── Layout.astro          # Un seul layout. Head, meta, fonts, scripts globaux.
├── components/
│   ├── Header.astro           # Logo + CTA "Audit gratuit"
│   ├── Hero.astro             # Accroche + CTA principal
│   ├── SocialProof.astro      # Barre logos/icônes plateformes IA
│   ├── Problem.astro          # "Le monde a changé" + 3 stat cards
│   ├── Solution.astro         # GEO + SEO Local — 2 colonnes
│   ├── Verticals.astro        # Grille des 5 verticales (dentistes, restos...)
│   ├── HowItWorks.astro       # 3 étapes horizontales
│   ├── Quote.astro            # Citation + argument massue
│   ├── AuditForm.astro        # Formulaire Tally embed + trust signals
│   └── Footer.astro           # Contact + mentions légales
├── pages/
│   ├── index.astro            # Assemble tout
│   └── mentions-legales.astro # Page légale obligatoire
├── styles/
│   └── global.css             # @font-face + Tailwind directives + CSS vars
└── content/
    └── blog/                  # Vide (préparé pour le futur)
```

## Règles Astro

### Composants
- Un composant = une section de la page. Pas de composant imbriqué sauf nécessité absolue.
- Pas de props complexes. Chaque composant contient son propre contenu (tiré de `CONTENT.md`).
- Pas de state management. C'est un site statique.
- Le JavaScript client doit être minimal : uniquement l'IntersectionObserver pour les animations et le compteur de stats.

### Layout
```astro
---
// Layout.astro
interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
---
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <!-- Preload fonts -->
    <!-- Open Graph -->
    <!-- JSON-LD -->
    <!-- Plausible Analytics -->
  </head>
  <body>
    <slot />
  </body>
</html>
```

### Index page
```astro
---
// index.astro
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
// ... etc
---
<Layout title="..." description="...">
  <Header />
  <main>
    <Hero />
    <SocialProof />
    <Problem />
    <Solution />
    <Verticals />
    <HowItWorks />
    <Quote />
    <AuditForm />
  </main>
  <Footer />
</Layout>
```

## Tailwind CSS

### Configuration

```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        sand: '#EDE6DD',
        charcoal: '#2C2825',
        stone: '#6B6360',
        terracotta: {
          DEFAULT: '#C4785B',
          dark: '#A8623E',
        },
        sage: {
          DEFAULT: '#8B9E8B',
          dark: '#6F846F',
        },
        warmgray: '#B5ADA6',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
```

### Conventions de classes

Ordre des classes Tailwind dans un élément :
1. **Display/Position** : `flex`, `grid`, `relative`, `absolute`
2. **Sizing** : `w-full`, `max-w-container`, `h-screen`
3. **Spacing** : `px-6`, `py-16`, `mx-auto`, `gap-8`
4. **Typography** : `font-serif`, `text-2xl`, `font-normal`, `leading-tight`, `tracking-tight`
5. **Color** : `text-charcoal`, `bg-cream`
6. **Border** : `border`, `border-warmgray`
7. **Effects** : `opacity-50`, `transition`

Exemple :
```html
<h2 class="max-w-2xl mx-auto text-4xl font-serif font-normal leading-tight tracking-tight text-charcoal">
```

## CSS Global

```css
/* global.css */
@import "tailwindcss";

/* @font-face declarations ici */

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Selection color */
::selection {
  background-color: #C4785B;
  color: #F5F0EB;
}

/* Focus visible for accessibility */
:focus-visible {
  outline: 2px solid #C4785B;
  outline-offset: 4px;
}
```

## SEO et Meta

### Balises meta obligatoires
- `<title>` unique par page
- `<meta name="description">` — 155 caractères max
- `<link rel="canonical">`
- Open Graph : `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
- Twitter Card : `twitter:card`, `twitter:title`, `twitter:description`

### JSON-LD
Insérer un bloc JSON-LD `ProfessionalService` dans le `<head>` du layout. Le contenu exact est dans `CONTENT.md`.

### Sitemap
Astro génère un sitemap automatiquement avec `@astrojs/sitemap`. L'ajouter dans `astro.config.mjs`.

## Performance

- **Fonts** : Précharger avec `<link rel="preload" as="font" type="font/woff2" crossorigin>`.
- **CSS** : Tailwind purge automatiquement. Pas de CSS inutilisé.
- **JS** : Le seul JS client est l'IntersectionObserver (~20 lignes). Pas de framework JS côté client.
- **Images** : Utiliser le composant `<Image>` d'Astro avec des formats modernes (WebP, AVIF).
- **Score Lighthouse cible** : > 95 sur Performance, Accessibility, Best Practices, SEO.

## Git

### .gitignore
```
node_modules/
dist/
.env
.DS_Store
```

### Commits
- Messages en anglais
- Format : `type: description`
- Types : `feat`, `fix`, `style`, `refactor`, `docs`, `chore`
- Exemples : `feat: add hero section`, `style: adjust mobile spacing`, `fix: form embed responsive`

## Accessibilité

- Balises sémantiques : `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`
- Chaque `<section>` a un `aria-label` ou contient un heading
- Tous les liens ont un texte descriptif (pas de "cliquez ici")
- Contraste minimum WCAG AA (4.5:1 pour le texte, 3:1 pour les grands textes)
- Navigation au clavier : tab order logique, focus visible sur tous les éléments interactifs
- Le formulaire a des `<label>` associés à chaque `<input>`
