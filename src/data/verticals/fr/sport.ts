import type { VerticalData } from '../types';

export const data: VerticalData = {
  // Meta
  title: 'Plus d\'adhérents pour votre salle de sport | Eddie Miller Agency',
  description: 'Vos futurs adhérents demandent une salle de sport à ChatGPT. On fait en sorte qu\'ils vous trouvent. Diagnostic gratuit en 24h.',
  canonicalUrl: 'https://eddiemiller.agency/sport',
  ogTitle: 'Plus d\'adhérents pour votre salle de sport | Eddie Miller Agency',
  ogDescription: 'Vos futurs adhérents demandent une salle de sport à ChatGPT. On fait en sorte qu\'ils vous trouvent. Diagnostic gratuit en 24h.',

  // Hero
  badge: 'Spécialiste salles de sport',
  headline: '<span class="text-reveal-line block"><span>Les nouveaux adhérents demandent conseil à l\'IA avant de s\'inscrire.</span></span><span class="text-reveal-line block"><span>On vous rend&nbsp;incontournable.</span></span>',
  heroText: 'Avant de s\'inscrire dans une salle ou un club, les gens demandent à ChatGPT&nbsp;: «&nbsp;meilleure salle de sport dans le 11e&nbsp;». On fait en sorte que ce soit votre salle qui apparaisse dans ces résultats.',
  ctaText: 'Demander mon diagnostic gratuit',
  secondaryCtaText: 'Voir comment ça marche ↓',
  trust1: '✓ Diagnostic en 24h',
  trust2: '✓ 100 % gratuit',
  trust3: '✓ 1 seule salle de sport par quartier',
  plausibleLocation: 'sport-hero',

  // Social Proof
  socialProofLabel: 'Vos futurs adhérents vous cherchent ici',

  // What You Get
  whatYouGetTitle: 'Ce que vous recevez en&nbsp;24h',
  whatYouGetSubtitle: 'Un diagnostic complet de votre salle, pas un simple email.',
  deliverables: [
    { title: 'Votre score de visibilité sur 100', text: 'Est-ce qu\'une personne qui cherche une salle de sport dans votre ville et dans votre quartier vous trouve sur ChatGPT, Google Maps et les autres IA&nbsp;? Votre note vous le dit.' },
    { title: 'Ce qui bloque vos adhérents', text: 'On identifie précisément ce qui empêche les IA et Google de recommander votre salle plutôt qu\'une autre.' },
    { title: '3 actions prioritaires', text: 'Les corrections classées par impact. Ce qui fera bouger votre score le plus vite, sans jargon technique.' },
    { title: 'Un appel de 15 minutes', text: 'On parcourt vos résultats ensemble, on répond à vos questions, et on définit la suite si vous le souhaitez.' },
  ],

  // Testimonial
  testimonial: {
    quote: '«&nbsp;Depuis qu\'on travaille avec eux, des gens arrivent en disant qu\'ils nous ont trouvés sur ChatGPT. On ne savait même pas que c\'était possible pour une salle indépendante.&nbsp;»',
    name: 'Thomas R.',
    role: 'Salle de sport, Paris',
    beforeScore: 10,
    beforeLabel: 'Score de visibilité',
    beforeDetail: '«&nbsp;Que du bouche-à-oreille&nbsp;»',
    afterDelay: 'Après 8 semaines',
    afterScore: 74,
    afterLabel: 'Score de visibilité',
    afterDetail: '+25 nouveaux adhérents/mois',
  },

  // Stats
  statsTitle: 'Ce qui a changé pour les salles de&nbsp;sport',
  statsSubtitle: 'L\'effet janvier ne dure que quelques semaines. Le reste de l\'année, les nouveaux adhérents cherchent en ligne, sur Google Maps ou en demandant à ChatGPT&nbsp;: «&nbsp;une bonne salle de sport près de chez moi&nbsp;». On fait en sorte que votre salle apparaisse dans ces 3 à 5 résultats pour que ces adhérents viennent chez vous.',
  stats: [
    { countTo: 58, suffix: '%', text: 'des gens recherchent une salle de sport en ligne avant de s\'inscrire', source: 'BrightLocal, 2026' },
    { countTo: 83, suffix: '%', text: 'des salles de sport indépendantes sont invisibles sur ChatGPT', source: 'Local Falcon, 2026' },
    { staticValue: '3 à 5', text: 'résultats : c\'est tout ce que ChatGPT montre quand quelqu\'un cherche une salle de sport' },
  ],

  // Problems
  problemsTitle: 'Les problèmes que vous&nbsp;connaissez',
  problems: [
    { title: 'Janvier ne suffit plus', text: 'Le rush des bonnes résolutions est de plus en plus court. Vous pouvez obtenir de nouveaux adhérents toute l\'année.' },
    { title: 'Les chaînes dominent Google', text: 'Basic Fit, Fitness Park trustent les premières places. Mais l\'IA recommande en fonction de la qualité des paramètres qu\'on lui donne : nous optimisons cela.' },
    { title: 'Les avis font la différence', text: 'Une salle indépendante avec de bons avis bat une chaîne sur ChatGPT. Mais seulement si l\'IA peut trouver ces avis. C\'est là qu\'on agit.' },
  ],

  // Solution
  solutionTitle: 'Ce qu\'on fait pour votre&nbsp;salle',
  solutionSubtitle: 'Deux objectifs simples&nbsp;: que vos futurs adhérents vous trouvent, et qu\'ils vous choisissent.',
  solutionFeatures: [
    { title: 'Être trouvé sur Google', text: 'Votre salle apparaît dans Google Maps quand quelqu\'un cherche une salle de sport dans votre ville et dans votre quartier. Votre fiche Google est complète, professionnelle. Vos avis travaillent pour vous.' },
    { title: 'Être recommandé par les IA', text: 'Quand quelqu\'un demande «&nbsp;salle de sport près de chez moi&nbsp;» à ChatGPT, votre nom apparaît. Votre réputation en ligne donne confiance à l\'IA pour vous recommander plutôt qu\'une chaîne.' },
  ],

  // How It Works
  howItWorksTitle: 'Comment ça marche',
  howItWorksSubtitle: 'Une seule salle de sport par quartier, pour vous garantir l\'exclusivité.',
  steps: [
    { number: '01', title: 'Diagnostic gratuit', text: 'On teste votre salle sur ChatGPT, Google Maps et les autres IA. Vous recevez un score sur 100 et un diagnostic clair en 24h.' },
    { number: '02', title: 'On en parle ensemble', text: 'On parcourt vos résultats ensemble. Vous comprenez ce qui bloque et ce qu\'il faut corriger en priorité pour votre salle.' },
    { number: '03', title: 'Vos adhérents vous trouvent', text: 'On met en place les corrections. Vos futurs adhérents vous trouvent sur Google et sur les IA. Score mesuré avant et après.' },
  ],

  // FAQ
  faqTitle: 'Questions fréquentes',
  faqs: [
    { question: 'Ça marche aussi pour les salles indépendantes face aux chaînes&nbsp;?', answer: 'Oui, et c\'est même là que l\'IA fait la différence. Les chaînes dominent Google grâce à leur budget. Mais ChatGPT recommande en fonction des avis et de la pertinence locale. Une salle indépendante bien référencée a toutes ses chances.' },
    { question: 'En combien de temps voit-on des résultats&nbsp;?', answer: 'Sur Google, les premiers effets apparaissent en quelques jours. Sur les IA comme ChatGPT, comptez 4 à 8 semaines. Nous mesurons tout avec un score avant/après pour que vous puissiez voir la différence.' },
    { question: 'Vous garantissez d\'apparaître sur ChatGPT&nbsp;?', answer: 'Non, et quiconque le promet vous ment. Les IA choisissent leurs recommandations de manière autonome. Ce que nous garantissons&nbsp;: votre salle aura toutes les conditions pour être recommandée. Et nous mesurons le résultat avec un score avant/après.' },
    { question: 'Je n\'ai pas de site web pour ma salle', answer: 'Ce n\'est pas un problème. L\'essentiel de votre visibilité passe par votre fiche Google, les annuaires sport et vos avis. On optimise tout ça, avec ou sans site web.' },
    { question: 'Combien de temps ça me prend&nbsp;?', answer: 'Très peu. 1 minute pour remplir le formulaire de diagnostic. Ensuite, environ 30 minutes au total pour appliquer nos recommandations. On vous guide pas à pas, c\'est essentiellement du copier-coller.' },
    { question: 'Pourquoi une seule salle par quartier&nbsp;?', answer: 'Pour garantir votre exclusivité. Si on aide un concurrent dans le même quartier, ça vous dessert. On ne fait pas ça. Une seule salle de sport par zone, point final.' },
  ],

  // Form
  formTitle: 'Votre diagnostic gratuit en 24h',
  formSubtitle: 'Remplissez le formulaire. On teste votre salle sur Google et sur les IA. Résultat en 24h, sans engagement.',
  formConfig: {
    etablissementLabel: 'Nom de la salle',
    etablissementPlaceholder: 'CrossFit Bastille, Iron Temple Gym…',
    typeLabel: 'Type d\'activité',
    typeOptions: [
      { value: 'salle-musculation', label: 'Salle de musculation / fitness', selected: true },
      { value: 'crossfit', label: 'Box CrossFit' },
      { value: 'salle-cours-collectifs', label: 'Salle de cours collectifs' },
      { value: 'studio-coaching', label: 'Studio de coaching privé' },
      { value: 'autre', label: 'Autre' },
    ],
    pageSlug: 'sport',
  },
};
