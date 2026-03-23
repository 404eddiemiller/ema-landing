# CLAUDE.md — Eddie Miller Agency Landing Page

## Identité du projet

Tu construis le site web d'**Eddie Miller Agency (EMA)**, une agence B2B parisienne spécialisée en **GEO (Generative Engine Optimization)** et **SEO local**. Le site aide des commerces locaux (restaurants, hôtels, cabinets dentaires, médicaux, avocats) à devenir visibles dans les recommandations des IA (ChatGPT, Claude, Gemini, Perplexity) et sur Google/Google Maps.

**Le site est une landing page de conversion.** L'objectif unique : convaincre un gérant de commerce local parisien de demander un **audit gratuit** de sa visibilité IA.

## Stack technique

- **Framework** : Astro (dernière version stable)
- **CSS** : Tailwind CSS 4
- **Animations** : CSS natif uniquement (pas de librairie JS)
- **Formulaire** : Embed Tally (URL à fournir plus tard — utiliser un placeholder)
- **Analytics** : Plausible Analytics (script à ajouter dans le `<head>`)
- **Paiement futur** : Stripe (pas maintenant — prévoir l'intégration dans l'architecture)
- **Déploiement** : Vercel (via GitHub)
- **Domaine** : eddiemiller.agency (pas encore acheté)

## Ce que tu dois TOUJOURS faire

1. **Lire `DESIGN.md`** avant tout travail visuel. C'est la bible esthétique du projet.
2. **Lire `CONTENT.md`** avant d'écrire du texte. Tout le copywriting est déjà rédigé — ne le réinvente pas.
3. **Lire `CONVENTIONS.md`** avant de créer un fichier. Structure et nommage sont stricts.
4. **Écrire tout le contenu visible en français.** Commentaires de code en anglais.
5. **Mobile-first.** Toujours commencer par le design 375px, puis adapter au desktop.
6. **Tester le responsive** à 3 breakpoints : 375px (iPhone), 768px (iPad), 1440px (desktop).
7. **Respecter l'accessibilité** : balises sémantiques HTML5, attributs `alt` sur les images, contraste WCAG AA minimum, navigation au clavier fonctionnelle.
8. **Performance** : Lazy-loading des images, pas de JavaScript inutile, fichiers CSS purgés.

## Ce que tu ne dois JAMAIS faire

1. **Ne JAMAIS utiliser Inter, Roboto, Arial, ou des polices système génériques.**
2. **Ne JAMAIS utiliser de dégradés violets, bleus électriques ou couleurs néon.**
3. **Ne JAMAIS ajouter de fonctionnalité non demandée.** Pas de chatbot, pas de popup, pas de slider, pas de carrousel.
4. **Ne JAMAIS inventer du contenu marketing.** Tout le texte vient de `CONTENT.md`.
5. **Ne JAMAIS utiliser d'images stock ou de placeholders "Lorem ipsum".**
6. **Ne JAMAIS installer de dépendance npm sans l'expliquer.** La stack doit rester minimale.
7. **Ne JAMAIS créer de fichiers en dehors de la structure définie dans `CONVENTIONS.md`.**
8. **Ne JAMAIS utiliser de composants UI pré-faits (shadcn, DaisyUI, etc.).** Tout est custom.

## Architecture future (ne pas construire maintenant)

Le site devra un jour supporter :
- **Blog/articles** (Astro Content Collections — prévoir le dossier `src/content/blog/`)
- **Pages par vertical** (dentistes, restaurants, hôtels — prévoir le routing)
- **Espace client / portail** (probablement une app séparée — ne pas anticiper dans le code)
- **Paiement Stripe** (après l'audit gratuit — prévoir un composant placeholder)

Pour l'instant, on construit **UNIQUEMENT** la landing page + formulaire audit gratuit.

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

## Structure attendue du projet

```
ema-landing/
├── CLAUDE.md              ← Tu es ici
├── DESIGN.md              ← Système de design (LIRE EN PREMIER)
├── CONTENT.md             ← Tout le copywriting
├── CONVENTIONS.md         ← Conventions de code
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── fonts/             ← Fichiers de polices (woff2)
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro   ← Layout principal (head, meta, scripts)
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── SocialProof.astro
│   │   ├── Problem.astro
│   │   ├── Solution.astro
│   │   ├── Verticals.astro
│   │   ├── HowItWorks.astro
│   │   ├── Quote.astro
│   │   ├── AuditForm.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro    ← Landing page (assemble les composants)
│   │   └── mentions-legales.astro
│   ├── styles/
│   │   └── global.css     ← Imports Tailwind + @font-face + variables custom
│   └── content/
│       └── blog/          ← Vide pour l'instant (prêt pour le futur)
└── .gitignore
```

## Workflow de travail

1. **Initialiser** : `npm create astro@latest` avec le template minimal, puis ajouter Tailwind.
2. **Installer les polices** : Télécharger les fichiers woff2, les placer dans `public/fonts/`.
3. **Construire section par section** : Hero → SocialProof → Problem → Solution → Verticals → HowItWorks → Quote → AuditForm → Footer.
4. **Tester chaque section** en responsive avant de passer à la suivante.
5. **Assembler** dans `index.astro`.
6. **Ajouter le SEO** : meta tags, Open Graph, JSON-LD (voir `CONTENT.md`).
7. **Build & test** : `npm run build` puis `npm run preview`.

## Critère de succès

La page est réussie quand :
- Un gérant de restaurant parisien qui la visite sur son iPhone comprend en 5 secondes ce qu'on fait
- Il scrolle naturellement jusqu'au formulaire sans friction
- Le design évoque la confiance et le professionnalisme, pas une "agence tech"
- Le temps de chargement est < 1.5s sur mobile 4G
- Le score Lighthouse est > 95 sur les 4 critères
