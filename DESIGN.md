# DESIGN.md — Système de Design Eddie Miller Agency

## Direction esthétique

**Un bel objet qu'on a envie de montrer.**

Le site d'Eddie Miller Agency ne ressemble pas à une agence tech. Il ressemble à un magazine éditorial haut de gamme. Chaque pixel respire le calme, la compétence et la confiance. C'est Aesop, pas Salesforce. Kinfolk, pas HubSpot. Cereal Magazine, pas une landing page SaaS.

Le propriétaire d'un restaurant étoilé ou le gérant d'un hôtel de charme doit sentir qu'il a affaire à quelqu'un qui comprend l'esthétique, pas à un technicien SEO avec un site WordPress en bleu.

### Mots-clés de l'identité visuelle
- Chaleureux, pas froid
- Élégant, pas tape-à-l'œil
- Éditorial, pas corporate
- Confiant, pas arrogant
- Épuré, pas vide

### Inspirations concrètes
- **Aesop** (aesop.com) — Palette terreuse, typographie serif, espace généreux
- **Kinfolk** (kinfolk.com) — Mise en page magazine, respiration, hiérarchie typographique claire
- **Cereal Magazine** (readcereal.com) — Tons neutres, photographie contemplative, grille invisible

## Palette de couleurs

### Couleurs principales

```css
:root {
  /* Fond principal — un blanc cassé chaud, jamais du blanc pur */
  --color-cream:         #F5F0EB;
  
  /* Fond alternatif — pour les sections qui alternent */
  --color-sand:          #EDE6DD;
  
  /* Texte principal — un noir adouci, jamais du noir pur */
  --color-charcoal:      #2C2825;
  
  /* Texte secondaire — pour les sous-titres et le corps */
  --color-stone:         #6B6360;
  
  /* Accent principal — terre cuite douce */
  --color-terracotta:    #C4785B;
  
  /* Accent secondaire — sauge (CTA secondaires, tags, badges) */
  --color-sage:          #8B9E8B;
  
  /* Accent tertiaire — un brun chaud pour les bordures et séparateurs */
  --color-warmgray:      #B5ADA6;
  
  /* État hover sur terre cuite */
  --color-terracotta-dark: #A8623E;
  
  /* État hover sur sauge */
  --color-sage-dark:     #6F846F;
}
```

### Règles d'utilisation des couleurs

| Usage | Couleur | Variable |
|-------|---------|----------|
| Fond de page | Blanc cassé chaud | `--color-cream` |
| Sections alternées | Sable | `--color-sand` |
| Titres (h1, h2) | Charbon | `--color-charcoal` |
| Corps de texte | Pierre | `--color-stone` |
| Bouton CTA principal | Terre cuite | `--color-terracotta` |
| Bouton CTA secondaire | Contour sauge | `--color-sage` |
| Liens dans le texte | Terre cuite | `--color-terracotta` |
| Bordures et séparateurs | Gris chaud | `--color-warmgray` |
| Texte sur fond terre cuite | Crème | `--color-cream` |

### Interdictions absolues

- ❌ Blanc pur (`#FFFFFF`) — utiliser `--color-cream` ou `#FDFBF9`
- ❌ Noir pur (`#000000`) — utiliser `--color-charcoal`
- ❌ Bleu de toute nuance
- ❌ Violet, rose vif, orange vif
- ❌ Dégradés de couleur (sauf un très subtil cream → sand)
- ❌ Ombres portées colorées
- ❌ Néon ou couleur fluorescente

## Typographie

### Polices

**Titres : DM Serif Display** (Google Fonts, gratuite)
- Serif élégant avec du caractère
- Utilisée pour h1, h2, h3 et les citations
- Graisses : 400 (regular) uniquement

**Corps : DM Sans** (Google Fonts, gratuite)
- Sans-serif humaniste qui s'accorde parfaitement avec DM Serif Display
- Utilisée pour les paragraphes, boutons, navigation, labels
- Graisses : 400 (regular), 500 (medium), 700 (bold)

**Alternative si DM Serif Display ne convient pas :** Playfair Display ou Lora.
**Alternative si DM Sans ne convient pas :** Outfit ou Nunito Sans.

### Téléchargement

Les fichiers `.woff2` sont hébergés localement dans `public/fonts/`. Ne JAMAIS utiliser le CDN Google Fonts (RGPD + performance).

**DM Sans utilise un fichier variable font** (un seul fichier couvre toutes les graisses 100–900). Plus performant que plusieurs fichiers séparés.

```css
@font-face {
  font-family: 'DM Serif Display';
  src: url('/fonts/DMSerifDisplay-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'DM Sans';
  src: url('/fonts/DMSans-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

### Échelle typographique

| Élément | Taille mobile | Taille desktop | Poids | Police | Line-height |
|---------|--------------|----------------|-------|--------|-------------|
| h1 (hero) | 2.5rem (40px) | 4rem (64px) | 400 | DM Serif Display | 1.1 |
| h2 (sections) | 2rem (32px) | 3rem (48px) | 400 | DM Serif Display | 1.15 |
| h3 (sous-sections) | 1.5rem (24px) | 1.75rem (28px) | 400 | DM Serif Display | 1.2 |
| Body | 1rem (16px) | 1.125rem (18px) | 400 | DM Sans | 1.6 |
| Body large | 1.125rem (18px) | 1.25rem (20px) | 400 | DM Sans | 1.6 |
| Small / caption | 0.875rem (14px) | 0.875rem (14px) | 500 | DM Sans | 1.4 |
| Bouton | 1rem (16px) | 1rem (16px) | 500 | DM Sans | 1 |
| Nav links | 0.9375rem (15px) | 0.9375rem (15px) | 500 | DM Sans | 1 |

### Règles typographiques

- **Tracking (letter-spacing)** : h1 et h2 → `-0.02em`. Petites capitales → `0.1em`.
- **Largeur de colonne de texte** : Maximum `65ch` pour les paragraphes.
- **Pas de texte centré** sauf pour les h1/h2 de section et les citations. Les paragraphes sont alignés à gauche.
- **Pas de tout-majuscule** sauf pour les labels courts (catégories, tags, navigation).

## Espacement

L'espacement est **généreux**. On ne tasse rien.

### Grille de spacing

```css
/* Système de spacing basé sur 8px */
--space-xs:   0.5rem;   /* 8px */
--space-sm:   1rem;     /* 16px */
--space-md:   1.5rem;   /* 24px */
--space-lg:   2rem;     /* 32px */
--space-xl:   3rem;     /* 48px */
--space-2xl:  4rem;     /* 64px */
--space-3xl:  6rem;     /* 96px */
--space-4xl:  8rem;     /* 128px */
```

### Espacement entre sections

- **Mobile** : `padding-top: var(--space-2xl); padding-bottom: var(--space-2xl);` (64px)
- **Desktop** : `padding-top: var(--space-4xl); padding-bottom: var(--space-4xl);` (128px)

### Container

- **Largeur max** : `1200px`
- **Padding horizontal** : `1.5rem` (mobile), `2rem` (tablette), `4rem` (desktop)
- **Toujours centré** : `margin: 0 auto`

## Composants visuels

### Boutons

**CTA principal (terre cuite) :**
```css
.btn-primary {
  background-color: var(--color-terracotta);
  color: var(--color-cream);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0; /* Pas de border-radius — coins droits = éditorial */
  cursor: pointer;
  transition: background-color 0.3s ease;
  letter-spacing: 0.02em;
}
.btn-primary:hover {
  background-color: var(--color-terracotta-dark);
}
```

**CTA secondaire (contour) :**
```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-charcoal);
  border: 1px solid var(--color-warmgray);
  padding: 1rem 2rem;
  border-radius: 0;
  transition: border-color 0.3s ease;
}
.btn-secondary:hover {
  border-color: var(--color-charcoal);
}
```

### Règles sur les boutons
- **Jamais de border-radius.** Les coins droits sont la signature esthétique.
- **Jamais de shadow sur les boutons.**
- **Padding généreux** : au minimum `1rem 2rem`.
- **Un seul CTA principal visible** par viewport. Pas de surcharge.

### Cartes

```css
.card {
  background-color: var(--color-cream);
  border: 1px solid var(--color-warmgray);
  padding: 2rem;
  border-radius: 0; /* Pas de border-radius */
  transition: border-color 0.3s ease;
}
.card:hover {
  border-color: var(--color-terracotta);
}
```

### Séparateurs

- Utiliser une ligne fine de `1px` en `var(--color-warmgray)` avec `opacity: 0.5`.
- Ou un espacement vide généreux (préféré).
- Jamais de `<hr>` visible sauf entre sections majeures.
- `.separator-animate` : trait terracotta de 2px, s'anime de 0 à 48px au scroll.

### Sections sombres

La section **Problem** utilise `bg-charcoal text-cream` pour créer un contraste visuel fort (style Apple). Les cartes internes ont un fond `bg-cream/5` avec bordure `border-cream/10`. C'est la seule section sombre du site — ne pas en ajouter d'autres sans raison.

### Icônes

- Style : **ligne fine (stroke)**, pas de fill solide.
- Épaisseur de trait : `1.5px`.
- Couleur : `var(--color-stone)` par défaut, `var(--color-terracotta)` au hover.
- Source : SVG custom ou Lucide Icons (le plus aligné avec l'esthétique).
- Taille : `24px` par défaut, `32px` pour les icônes de section.

## Animations

### Principes
- **Subtiles.** L'utilisateur ne doit pas consciemment remarquer les animations.
- **CSS uniquement.** Pas de librairie JavaScript.
- **Performance.** Animer uniquement `opacity` et `transform`.
- **Pas de cascade.** Tous les éléments d'une section apparaissent ensemble, pas en décalé.
- **`prefers-reduced-motion`** : respecté — toutes les animations sont désactivées.

### Classes d'animation au scroll

Plusieurs classes existent pour le balisage sémantique, mais elles produisent toutes le **même effet** : un fade-in subtil avec un léger translateY(16px) sur 1 seconde. Les inline `transition-delay` sont ignorés (`0s !important`).

```css
/* Toutes ces classes produisent le même effet */
.fade-up, .fade-up-slow, .scale-in,
.slide-in-left, .slide-in-right,
.blur-in, .fade-in {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 1s var(--ease-out-expo), transform 1s var(--ease-out-expo);
  transition-delay: 0s !important;
}
```

Convention d'usage des classes (pour la lisibilité du code) :
- `fade-up-slow` : titres h2
- `fade-up` : sous-titres, paragraphes, CTA
- `scale-in` : cartes
- `slide-in-left` / `slide-in-right` : colonnes côte à côte (Solution)
- `blur-in` : paragraphes de conclusion
- `fade-in` : éléments génériques

Déclenché par un `IntersectionObserver` dans `Layout.astro` qui ajoute `.visible` quand l'élément entre dans le viewport (threshold 0.1).

### Animations spéciales

- **Score circles** (Testimonial) : SVG `<circle>` avec `stroke-dashoffset` animé sur 2s. Un script dédié observe les cartes témoignages et anime les arcs de 0 au score.
- **Séparateurs terracotta** (`.separator-animate`) : `width: 0` → `48px` sur 1.4s au scroll.
- **Lignes SVG** (`.draw-line`) : `stroke-dashoffset` animé sur 2s (timeline HowItWorks).
- **Compteurs** : Les chiffres (83%, 45%) comptent de 0 à leur valeur finale en 1.5s avec `requestAnimationFrame`.

### Transitions hover
- **Boutons** : `transition: background-color 0.3s ease` — changement de couleur uniquement, pas de scale
- **Cartes** (`.card-hover`) : `transition: border-color 0.3s ease` — bordure terracotta, pas de lift
- **Liens** (`.hover-underline`) : underline animé de gauche à droite via `::after`
- **Header** : taille fixe, pas de shrink au scroll

### Ce qui est interdit
- ❌ scale sur les boutons ou cartes au hover
- ❌ translateY (lift) sur les cartes au hover
- ❌ blur-in visible (le filtre blur n'est pas appliqué malgré le nom de classe)
- ❌ text-reveal / clip-path (les `.text-reveal-line` ne font rien, affichage immédiat)
- ❌ cascade / stagger entre éléments frères

## Images et visuels

### Approche
Le site n'utilise **aucune photo stock**. Les visuels sont :
- Des formes géométriques subtiles en SVG (arrière-plans de section)
- Des icônes SVG en ligne fine
- Un motif très discret de grain/texture sur le fond (optionnel)

### Fond du hero
Un fond `var(--color-cream)` avec un très subtil motif de grain CSS :
```css
.hero {
  background-color: var(--color-cream);
  background-image: url("data:image/svg+xml,..."); /* grain SVG très léger */
}
```

Ou pas de motif du tout — juste la couleur unie. La simplicité est toujours préférable à la décoration.

## Responsive

### Breakpoints Tailwind

```javascript
// tailwind.config.mjs
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
}
```

### Règles responsive
- **Mobile (< 768px)** : Stack vertical, une colonne, padding réduit.
- **Tablette (768px - 1024px)** : Grille 2 colonnes pour les cartes, padding intermédiaire.
- **Desktop (> 1024px)** : Layout complet, colonnes côte à côte, espacement maximal.
- **Le header** : Nom du site à gauche, un seul bouton CTA à droite. Pas de menu hamburger (c'est une seule page).
- **Le formulaire** : Toujours pleine largeur sur mobile. Champs empilés verticalement.
- **Les stat cards** : Stack vertical sur mobile, côte à côte sur desktop.

## Ton global

Le design communique : *"Nous sommes des experts calmes et compétents. Nous allons résoudre votre problème sans bruit."*

Ce n'est PAS : *"URGENCE !!! Vos concurrents vous dépassent !!! Agissez MAINTENANT !!!"*
