import type { VerticalData } from '../types';

export const data: VerticalData = {
  // Meta
  title: 'Plus de clients pour votre spa | Eddie Miller Agency',
  description: 'Vos futurs clients cherchent un spa sur ChatGPT et Google. On fait en sorte qu\'ils vous trouvent. Diagnostic gratuit en 24h.',
  canonicalUrl: 'https://eddiemiller.agency/spa',
  ogTitle: 'Plus de clients pour votre spa | Eddie Miller Agency',
  ogDescription: 'Vos futurs clients cherchent un spa sur ChatGPT et Google. On fait en sorte qu\'ils vous trouvent. Diagnostic gratuit en 24h.',

  // Hero
  badge: 'Spécialiste bien-être & spa',
  headline: '<span class="text-reveal-line block"><span>Vos futurs clients cherchent un spa dans leur ville.</span></span><span class="text-reveal-line block"><span>L\'IA leur répond : on fait en sorte que ce soit votre nom qui apparaisse.</span></span>',
  heroText: 'Détente, massages, soins du visage : quand quelqu\'un cherche un moment de bien-être, il tape «&nbsp;meilleur spa près de chez moi&nbsp;» sur ChatGPT. Si votre institut n\'apparaît pas, ces clients iront ailleurs.',
  ctaText: 'Demander mon diagnostic gratuit',
  secondaryCtaText: 'Voir comment ça marche ↓',
  trust1: '✓ Diagnostic en 24h',
  trust2: '✓ 100 % gratuit',
  trust3: '✓ 1 seul spa par quartier',
  plausibleLocation: 'spa-hero',

  // Social Proof
  socialProofLabel: 'Vos futurs clients vous cherchent ici',

  // What You Get
  whatYouGetTitle: 'Ce que vous recevez en&nbsp;24h',
  whatYouGetSubtitle: 'Un diagnostic complet de votre spa, pas un simple email.',
  deliverables: [
    { title: 'Votre score de visibilité sur 100', text: 'Est-ce qu\'un client qui cherche un spa ou un massage dans votre ville et dans votre quartier vous trouve sur ChatGPT, Google Maps et les autres IA&nbsp;? Votre note vous le dit.' },
    { title: 'Ce qui bloque vos clients', text: 'On identifie précisément ce qui empêche les IA et Google de recommander votre spa plutôt qu\'un concurrent.' },
    { title: '3 actions prioritaires', text: 'Les corrections classées par impact. Ce qui fera bouger votre score le plus vite, sans jargon technique.' },
    { title: 'Un appel de 15 minutes', text: 'On parcourt vos résultats ensemble, on répond à vos questions, et on définit la suite si vous le souhaitez.' },
  ],

  // Testimonial
  testimonial: {
    quote: '«&nbsp;Des clientes nous appellent en disant qu\'elles ont trouvé notre spa sur ChatGPT. Elles réservent un massage sans même comparer ailleurs. On ne s\'y attendait pas du tout.&nbsp;»',
    name: 'Claire B.',
    role: 'Spa & institut, Paris',
    beforeScore: 6,
    beforeLabel: 'Score de visibilité',
    beforeDetail: '«&nbsp;Très peu de nouveaux clients&nbsp;»',
    afterDelay: 'Après 8 semaines',
    afterScore: 82,
    afterLabel: 'Score de visibilité',
    afterDetail: '+20 réservations/mois',
  },

  // Stats
  statsTitle: 'Ce qui a changé pour le&nbsp;bien-être',
  statsSubtitle: 'Le bien-être est un marché concurrentiel. Vos clients comparent avant de réserver. Et de plus en plus demandent directement à ChatGPT&nbsp;: «&nbsp;le meilleur spa près de chez moi&nbsp;». On fait en sorte que votre spa apparaisse dans ces 3 à 5 résultats, pour que ces clients réservent chez vous.',
  stats: [
    { countTo: 52, suffix: '%', text: 'des clients utilisent Google ou une IA pour trouver un spa', source: 'BrightLocal, 2026' },
    { countTo: 83, suffix: '%', text: 'des spas et instituts sont invisibles sur ChatGPT', source: 'Local Falcon, 2026' },
    { staticValue: '3 à 5', text: 'résultats : c\'est tout ce que ChatGPT montre quand quelqu\'un cherche un spa' },
  ],

  // Problems
  problemsTitle: 'Les problèmes que vous&nbsp;connaissez',
  problems: [
    { title: 'Le bouche-à-oreille ne suffit plus', text: 'Les nouveaux clients posent la question directement à ChatGPT ou aux autres IA.' },
    { title: 'Les plateformes prennent leur part', text: 'Treatwell, Planity et Staycation prennent des commissions. Quand l\'IA vous recommande directement, les clients viennent sans intermédiaire. Cela vous fait plus de revenus.' },
    { title: 'L\'ambiance ne se transmet pas toute seule', text: 'Votre spa est unique. Mais l\'IA ne le sait pas si votre présence en ligne ne raconte pas cette histoire. Nous optimisons cela pour que vous soyez davantage recommandé par ChatGPT.' },
  ],

  // Solution
  solutionTitle: 'Ce qu\'on fait pour votre&nbsp;spa',
  solutionSubtitle: 'Deux objectifs simples&nbsp;: que vos clients vous trouvent, et qu\'ils réservent chez vous.',
  solutionFeatures: [
    { title: 'Être trouvé sur Google', text: 'Votre spa apparaît dans Google Maps quand quelqu\'un cherche un massage ou un soin dans votre ville et dans votre quartier. Votre fiche Google est complète, professionnelle. Vos avis clients travaillent pour vous.' },
    { title: 'Être recommandé par les IA', text: 'Quand un client demande «&nbsp;spa relaxant près de chez moi&nbsp;» à ChatGPT, votre nom apparaît. Votre réputation en ligne donne confiance à l\'IA pour vous recommander plutôt qu\'un autre.' },
  ],

  // How It Works
  howItWorksTitle: 'Comment ça marche',
  howItWorksSubtitle: 'Un seul spa par quartier, pour vous garantir l\'exclusivité.',
  steps: [
    { number: '01', title: 'Diagnostic gratuit', text: 'On teste votre spa sur ChatGPT, Google Maps et les autres IA. Vous recevez un score sur 100 et un diagnostic clair en 24h.' },
    { number: '02', title: 'On en parle ensemble', text: 'On parcourt vos résultats ensemble. Vous comprenez ce qui bloque et ce qu\'il faut corriger en priorité pour votre spa.' },
    { number: '03', title: 'Vos clients vous trouvent', text: 'On met en place les corrections. Vos futurs clients vous trouvent sur Google et sur les IA. Score mesuré avant et après.' },
  ],

  // FAQ
  faqTitle: 'Questions fréquentes',
  faqs: [
    { question: 'Est-ce que ça remplace Treatwell ou Planity&nbsp;?', answer: 'Non, c\'est complémentaire. Treatwell et Planity servent à gérer les réservations. Nous, on intervient avant&nbsp;: on aide les clients à découvrir votre spa avant même qu\'ils n\'arrivent sur ces plateformes. Plus de visibilité = plus de réservations directes, sans commission.' },
    { question: 'En combien de temps voit-on des résultats&nbsp;?', answer: 'Sur Google, les premiers effets apparaissent en quelques jours. Sur les IA comme ChatGPT, comptez 4 à 8 semaines. Nous mesurons tout avec un score avant/après pour que vous puissiez voir la différence.' },
    { question: 'Vous garantissez d\'apparaître sur ChatGPT&nbsp;?', answer: 'Non, et quiconque le promet vous ment. Les IA choisissent leurs recommandations de manière autonome. Ce que nous garantissons&nbsp;: votre spa aura toutes les conditions pour être recommandé. Et nous mesurons le résultat avec un score avant/après.' },
    { question: 'Je n\'ai pas de site web', answer: 'Ce n\'est pas un problème. L\'essentiel de votre visibilité passe par votre fiche Google, les annuaires bien-être et vos avis clients. On optimise tout ça, avec ou sans site web.' },
    { question: 'Combien de temps ça me prend&nbsp;?', answer: 'Très peu. 1 minute pour remplir le formulaire de diagnostic. Ensuite, environ 30 minutes au total pour appliquer nos recommandations. On vous guide pas à pas, c\'est essentiellement du copier-coller.' },
    { question: 'Pourquoi un seul spa par quartier&nbsp;?', answer: 'Pour garantir votre exclusivité. Si on aide un concurrent dans le même quartier, ça vous dessert. On ne fait pas ça. Un seul spa par zone, point final.' },
  ],

  // Form
  formTitle: 'Votre diagnostic gratuit en 24h',
  formSubtitle: 'Remplissez le formulaire. On teste votre spa sur Google et sur les IA. Résultat en 24h, sans engagement.',
  formConfig: {
    etablissementLabel: 'Nom de l\'activité',
    etablissementPlaceholder: 'Spa des Sens, Institut Belle Peau…',
    typeLabel: 'Type d\'activité',
    typeOptions: [
      { value: 'spa', label: 'Spa', selected: true },
      { value: 'institut-beaute', label: 'Institut de beauté' },
      { value: 'centre-bien-etre', label: 'Centre de bien-être' },
      { value: 'salon-massage', label: 'Salon de massage' },
      { value: 'hammam-sauna', label: 'Hammam / Sauna' },
      { value: 'autre', label: 'Autre' },
    ],
    pageSlug: 'spa',
  },
};
