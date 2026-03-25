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
│   └── Layout.astro              # Un seul layout. Head, meta, fonts, scripts globaux.
├── components/
│   ├── Header.astro              # Logo + nav + CTA "Diagnostic gratuit"
│   ├── Hero.astro                # Accroche + CTA principal
│   ├── SocialProof.astro         # Barre logos/icônes plateformes IA
│   ├── WhatYouGet.astro          # Ce que vous obtenez — résultats concrets
│   ├── Testimonial.astro         # Témoignage client + score circle animé
│   ├── Problem.astro             # "Vos clients ont changé de réflexe" + 3 stat cards
│   ├── Quote.astro               # Citation + argument massue
│   ├── Solution.astro            # Ce qu'on fait pour vous — 2 colonnes Google + IA
│   ├── WhyUs.astro               # Pourquoi choisir EMA — différenciateurs clés
│   ├── Verticals.astro           # Grille des 8 verticales avec liens
│   ├── HowItWorks.astro          # 3 étapes horizontales
│   ├── FAQ.astro                 # Questions fréquentes — accordéon
│   ├── AuditForm.astro           # Formulaire FormSubmit.co + trust signals
│   └── Footer.astro              # Contact + mentions légales
├── pages/
│   ├── index.astro               # Assemble tout (landing page principale)
│   ├── dentistes.astro           # Landing page verticale dentistes
│   ├── restaurants.astro         # Landing page verticale restaurants
│   ├── hotels.astro              # Landing page verticale hôtels
│   ├── avocats.astro             # Landing page verticale avocats
│   ├── coiffure.astro            # Landing page verticale coiffure
│   ├── spa.astro                 # Landing page verticale spa
│   ├── sport.astro               # Landing page verticale sport
│   ├── bars.astro                # Landing page verticale bars
│   ├── formules.astro            # Page tarifs / formules
│   ├── merci.astro               # Page de confirmation post-formulaire
│   ├── mentions-legales.astro    # Page légale obligatoire
│   ├── cgv.astro                 # Conditions générales de vente
│   ├── 404.astro                 # Page 404 personnalisée
│   └── blog/
│       ├── index.astro           # Liste des articles de blog
│       └── [...slug].astro       # Template dynamique article de blog
├── styles/
│   └── global.css                # @font-face + Tailwind directives + CSS vars
└── content/
    └── blog/                     # 20 articles markdown (Content Collections)
```

## Règles Astro

### Composants
- Un composant = une section de la page. Pas de composant imbriqué sauf nécessité absolue.
- Pas de props complexes. Chaque composant contient son propre contenu (tiré de `CONTENT.md`).
- Pas de state management. C'est un site statique.
- Le JavaScript client inclut : IntersectionObserver pour les animations d'entrée au scroll (`.fade-up`, `.scale-in`, `.blur-in`, `.slide-in-left`, `.slide-in-right`, `.fade-up-slow`, `.draw-line`, `.separator-animate`, `.text-reveal-line`), animations de compteurs pour les statistiques, et animations de score circle SVG pour les témoignages. Toutes les classes d'entrée produisent le même effet visuel (voir `DESIGN.md` section Animations).

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
// index.astro — Ordre actuel des sections
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import SocialProof from '../components/SocialProof.astro';
import WhatYouGet from '../components/WhatYouGet.astro';
import Testimonial from '../components/Testimonial.astro';
import Problem from '../components/Problem.astro';
import Quote from '../components/Quote.astro';
import Solution from '../components/Solution.astro';
import WhyUs from '../components/WhyUs.astro';
import Verticals from '../components/Verticals.astro';
import HowItWorks from '../components/HowItWorks.astro';
import FAQ from '../components/FAQ.astro';
import AuditForm from '../components/AuditForm.astro';
import Footer from '../components/Footer.astro';
---
<Layout title="..." description="...">
  <Header />
  <main id="main-content">
    <Hero />
    <SocialProof />
    <WhatYouGet />
    <Testimonial />
    <Problem />
    <Quote />
    <Solution />
    <WhyUs />
    <Verticals />
    <HowItWorks />
    <FAQ />
    <AuditForm />
  </main>
  <Footer />
</Layout>
```

## Tailwind CSS

### Configuration (Tailwind CSS 4 — @theme)

Le projet utilise **Tailwind CSS 4** avec le plugin Vite `@tailwindcss/vite`. Il n'y a pas de fichier `tailwind.config.mjs` — la configuration se fait directement dans `global.css` via `@theme` :

```css
/* Dans src/styles/global.css */
@theme {
  --color-cream: #F5F0EB;
  --color-sand: #EDE6DD;
  --color-charcoal: #2C2825;
  --color-stone: #6B6360;
  --color-terracotta: #C4785B;
  --color-terracotta-dark: #A8623E;
  --color-sage: #8B9E8B;
  --color-sage-dark: #6F846F;
  --color-warmgray: #B5ADA6;

  --font-serif: 'DM Serif Display', Georgia, serif;
  --font-sans: 'DM Sans', system-ui, sans-serif;

  --max-width-container: 1200px;
}
```

```javascript
// astro.config.mjs — Tailwind intégré via Vite
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eddiemiller.agency',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
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
/* global.css — structure */
@import "tailwindcss";

/* @font-face declarations */
/* @theme — couleurs, polices, container (Tailwind CSS 4) */
/* CSS custom properties — spacing */
/* Base styles — html, body, ::selection, :focus-visible */
/* Prose styles — pour les articles de blog */
/* Sticky CTA bar — responsive */
/* Animation utilities — voir DESIGN.md pour les règles */
/* Card hover, hover-underline, score-circle, draw-line, separator-animate */
/* Prefers reduced motion */
/* FAQ accordion */
```

### Classes utilitaires custom (dans global.css)

| Classe | Effet | Usage |
|--------|-------|-------|
| `.fade-up` | Fade-in + translateY(16px), 1s | Éléments génériques |
| `.fade-up-slow` | Idem (même effet) | Titres h2 |
| `.scale-in` | Idem (même effet) | Cartes |
| `.slide-in-left` / `.slide-in-right` | Idem (même effet) | Colonnes côte à côte |
| `.blur-in` | Idem (même effet) | Paragraphes de conclusion |
| `.card-hover` | `border-color → terracotta` au hover | Toute carte interactive |
| `.hover-underline` | Underline animé via `::after` | Liens nav/footer |
| `.separator-animate` | `width: 0 → 48px` au scroll | Traits décoratifs terracotta |
| `.draw-line` | `stroke-dashoffset` SVG au scroll | Lignes timeline |
| `.score-circle` | `stroke-dashoffset` SVG au scroll | Cercles de score |

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
- **JS** : Le JS client gère les IntersectionObserver (animations d'entrée, score circles, draw-lines, separators), les compteurs animés pour les stats, et la sticky CTA bar. Pas de framework JS côté client.
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
