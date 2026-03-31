# CLAUDE.md — Eddie Miller Agency

## Identité du projet

Tu construis le site web d'**Eddie Miller Agency (EMA)**, une agence B2B qui aide les activités locales (restaurants, hôtels, cabinets dentaires, avocats, salons de coiffure, spas, salles de sport, bars) à être trouvées par leurs clients sur Google, Google Maps et les assistants IA (ChatGPT, Gemini, Perplexity).

**Le site est une landing page de conversion.** L'objectif unique : convaincre un gérant d'activité locale de demander un **diagnostic gratuit** de sa visibilité en ligne.

## Stack technique

- **Framework** : Astro (dernière version stable)
- **CSS** : Tailwind CSS 4 (via `@tailwindcss/vite`, configuration dans `@theme` de global.css — pas de `tailwind.config.mjs`)
- **Animations** : CSS natif uniquement (pas de librairie JS)
- **Formulaire** : FormSubmit.co
- **Analytics** : Plausible Analytics (script dans le `<head>`)
- **Paiement futur** : Stripe (pas maintenant — prévoir l'intégration dans l'architecture)
- **Déploiement** : Vercel via GitHub (configuré et actif)
- **Domaine** : eddiemiller.agency (acheté et en ligne)

## Ce que tu dois TOUJOURS faire

1. **Lire `DESIGN.md`** avant tout travail visuel. C'est la bible esthétique du projet.
2. **Lire `CONTENT.md`** avant d'écrire du texte. C'est le copywriting de référence — les composants contiennent le texte live, les deux doivent rester synchronisés.
3. **Lire `CONVENTIONS.md`** avant de créer un fichier. Structure et nommage sont stricts.
4. **Ne JAMAIS réécrire le contenu marketing existant sans accord explicite.**
5. **Mobile-first.** Toujours commencer par le design 375px, puis adapter au desktop.
6. **Tester le responsive** à 3 breakpoints : 375px (iPhone), 768px (iPad), 1440px (desktop).
7. **Respecter l'accessibilité** : balises sémantiques HTML5, attributs `alt` sur les images, contraste WCAG AA minimum, navigation au clavier fonctionnelle.
8. **Performance** : Lazy-loading des images, pas de JavaScript inutile, fichiers CSS purgés.

## Ce que tu ne dois JAMAIS faire

1. **Ne JAMAIS utiliser Inter, Roboto, Arial, ou des polices système génériques.**
2. **Ne JAMAIS utiliser de dégradés violets, bleus électriques ou couleurs néon.**
3. **Ne JAMAIS ajouter de fonctionnalité non demandée.** Pas de chatbot, pas de popup, pas de slider, pas de carrousel.
4. **Ne JAMAIS réécrire le contenu existant sans accord.**
5. **Ne JAMAIS utiliser d'images stock ou de placeholders "Lorem ipsum".**
6. **Ne JAMAIS installer de dépendance npm sans l'expliquer.** La stack doit rester minimale.
7. **Ne JAMAIS créer de fichiers en dehors de la structure définie dans `CONVENTIONS.md`.**
8. **Ne JAMAIS utiliser de composants UI pré-faits (shadcn, DaisyUI, etc.).** Tout est custom.

## Terminologie obligatoire

- **"diagnostic gratuit"** (jamais "audit", "test", "analyse")
- **"entreprise"** (jamais "établissement", "commerce" sauf dans les statistiques, ni "activité" pour désigner l'entreprise du client)
- **"être trouvé par vos clients"** (jamais "SEO", "GEO", "référencement", "empreinte numérique", "données structurées")
- **CTA unifié** : "Demander mon diagnostic gratuit"
- **Social proof** : ChatGPT · Claude · Google Maps · Gemini · Perplexity
- **Formules** : Diagnostic (gratuit), Essentiel, Complet, Premium (jamais "Starter", "Pro", et pas de prix visibles)
- Ne pas limiter géographiquement à Paris dans le texte visible

## Animations

- **Apparitions** : fade-in + translate-up de 16px, durée 1s, pas de cascade
- **Interdit** : scale, slide, blur, text-reveal
- **Hover cartes** : changement de bordure uniquement, pas de lift
- **Hover boutons** : changement de couleur uniquement, pas de scale
- **Header** : taille fixe, pas de shrink au scroll
- **Cercles de score** (témoignages) : animation au scroll, durée 2s
- **Lignes séparatrices** : animation au scroll, durée 1.4s
- **`prefers-reduced-motion`** : respecté systématiquement

## Architecture actuelle

- **Blog/articles** : ✅ Fait (20 articles, Astro Content Collections)
- **Pages par vertical** : ✅ Fait (8 pages : dentistes, restaurants, hôtels, avocats, coiffure, spa, sport, bars)
- **Page formules** : ✅ Fait (sans prix)
- **Espace client / portail** : À venir (probablement une app séparée — ne pas anticiper dans le code)
- **Paiement Stripe** : À venir (après le diagnostic gratuit — prévoir un composant placeholder)

## Commandes utiles

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview
```

## Structure du projet

```
eddie-miller-agency/
├── CLAUDE.md              ← Tu es ici
├── DESIGN.md              ← Système de design (LIRE EN PREMIER)
├── CONTENT.md             ← Copywriting de référence
├── CONVENTIONS.md         ← Conventions de code
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── fonts/             ← DMSerifDisplay-Regular.woff2 + DMSans-Variable.woff2
│   ├── favicon.svg
│   ├── favicon-32x32.png
│   ├── favicon-192x192.png
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── og-image.svg
│   ├── robots.txt
│   └── llms.txt
├── src/
│   ├── layouts/
│   │   └── Layout.astro   ← Layout principal (head, meta, scripts)
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── SocialProof.astro
│   │   ├── Problem.astro
│   │   ├── Solution.astro
│   │   ├── WhatYouGet.astro
│   │   ├── Verticals.astro
│   │   ├── Testimonial.astro
│   │   ├── HowItWorks.astro
│   │   ├── WhyUs.astro
│   │   ├── FAQ.astro
│   │   ├── Quote.astro
│   │   ├── AuditForm.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro    ← Landing page (assemble les composants)
│   │   ├── formules.astro
│   │   ├── merci.astro
│   │   ├── dentistes.astro
│   │   ├── restaurants.astro
│   │   ├── hotels.astro
│   │   ├── avocats.astro
│   │   ├── coiffure.astro
│   │   ├── spa.astro
│   │   ├── sport.astro
│   │   ├── bars.astro
│   │   ├── mentions-legales.astro
│   │   ├── cgv.astro
│   │   ├── 404.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   ├── styles/
│   │   └── global.css     ← Imports Tailwind + @font-face + variables custom
│   └── content/
│       └── blog/          ← 20 articles (Markdown + frontmatter)
└── .gitignore
```

## Workflow de travail

1. **Polices** : `DMSerifDisplay-Regular.woff2` + `DMSans-Variable.woff2` dans `public/fonts/`.
2. **Ordre des sections** (index.astro) : Hero → SocialProof → Problem → WhatYouGet → Solution → Testimonial → WhyUs → Verticals → HowItWorks → FAQ → AuditForm → Footer.
3. **Tester chaque section** en responsive avant de passer à la suivante.
4. **Assembler** dans `index.astro`.
5. **Ajouter le SEO** : meta tags, Open Graph, JSON-LD (voir `CONTENT.md`).
6. **Build & test** : `npm run build` puis `npm run preview`.

## Critère de succès

La page est réussie quand :
- Un gérant d'une activité locale qui la visite sur son iPhone comprend en 5 secondes ce qu'on fait
- Il scrolle naturellement jusqu'au formulaire sans friction
- Le design évoque la confiance et le professionnalisme, pas une "agence tech"
- Le temps de chargement est < 1.5s sur mobile 4G
- Le score Lighthouse est > 95 sur les 4 critères
