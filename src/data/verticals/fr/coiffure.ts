import type { VerticalData } from '../types';

export const data: VerticalData = {
  // Meta
  title: 'Plus de clients pour votre salon | Eddie Miller Agency',
  description: 'Vos futurs clients demandent un coiffeur à ChatGPT. On fait en sorte qu\'ils poussent la porte de votre salon. Diagnostic gratuit en 24h.',
  canonicalUrl: 'https://eddiemiller.agency/coiffure',
  ogTitle: 'Plus de clients pour votre salon | Eddie Miller Agency',
  ogDescription: 'Vos futurs clients demandent un coiffeur à ChatGPT. On fait en sorte qu\'ils poussent la porte de votre salon. Diagnostic gratuit en 24h.',

  // Hero
  badge: 'Spécialiste coiffure &amp; esthétique',
  headline: '<span class="text-reveal-line block"><span>«&nbsp;Meilleur coiffeur près de chez moi&nbsp;»</span></span><span class="text-reveal-line block"><span>L\'IA donne quelques noms.</span></span><span class="text-reveal-line block"><span>On fait en sorte que ce soit le&nbsp;vôtre.</span></span>',
  heroText: 'Vos clients ne poussent plus la porte par hasard. Avant de choisir un salon, ils demandent à ChatGPT. Si votre salon n\'apparaît pas, ces clients iront ailleurs.',
  ctaText: 'Demander mon diagnostic gratuit',
  secondaryCtaText: 'Voir comment ça marche ↓',
  trust1: '✓ Diagnostic en 24h',
  trust2: '✓ 100 % gratuit',
  trust3: '✓ 1 seul salon par quartier',
  plausibleLocation: 'coiffure-hero',

  // Social Proof
  socialProofLabel: 'Vos futurs clients vous cherchent ici',

  // What You Get
  whatYouGetTitle: 'Ce que vous recevez en&nbsp;24h',
  whatYouGetSubtitle: 'Un diagnostic complet de votre salon, pas un simple email.',
  deliverables: [
    { title: 'Votre score de visibilité sur 100', text: 'Est-ce qu\'un client qui cherche un coiffeur dans votre ville et dans votre quartier vous trouve sur ChatGPT, Google Maps et les autres IA&nbsp;? Votre note vous le dit.' },
    { title: 'Ce qui bloque vos clients', text: 'On identifie précisément ce qui empêche les IA et Google de recommander votre salon plutôt qu\'un autre.' },
    { title: '3 actions prioritaires', text: 'Les corrections classées par impact. Ce qui fera bouger votre score le plus vite, sans jargon technique.' },
    { title: 'Un appel de 15 minutes', text: 'On parcourt vos résultats ensemble, on répond à vos questions, et on définit la suite si vous le souhaitez.' },
  ],

  // Testimonial
  testimonial: {
    quote: '«&nbsp;Des clientes arrivent en disant qu\'elles ont trouvé le salon sur ChatGPT en cherchant une coloriste dans le 11e. On ne savait même pas que ça existait.&nbsp;»',
    name: 'Nadia K.',
    role: 'Salon de coiffure, Centre-ville',
    beforeScore: 4,
    beforeLabel: 'Score de visibilité',
    beforeDetail: '«&nbsp;Invisible en ligne&nbsp;»',
    afterDelay: 'Après 6 semaines',
    afterScore: 78,
    afterLabel: 'Score de visibilité',
    afterDetail: '+15 nouveaux clients/mois',
  },

  // Stats
  statsTitle: 'Ce qui a changé pour les&nbsp;salons',
  statsSubtitle: 'Le passage spontané devant la vitrine, ça existe encore. Mais de plus en plus de clients font leurs recherches avant de se déplacer. Ils demandent à Google ou à ChatGPT&nbsp;: «&nbsp;un bon coiffeur près de chez moi&nbsp;». On fait en sorte que votre salon apparaisse dans ces 3 à 5 résultats, pour que ce soit vous qui preniez le rendez-vous.',
  stats: [
    { countTo: 45, suffix: '%', text: 'des consommateurs utilisent les IA pour choisir une activité locale', source: 'BrightLocal, 2026' },
    { countTo: 83, suffix: '%', text: 'des salons sont invisibles sur ChatGPT', source: 'Local Falcon, 2026' },
    { staticValue: '3 à 5', text: 'résultats : c\'est tout ce que ChatGPT montre quand un client cherche un coiffeur' },
  ],

  // Problems
  problemsTitle: 'Les problèmes que vous&nbsp;connaissez',
  problems: [
    { title: 'Les clients ne poussent plus la porte par hasard', text: 'Le passage spontané diminue. Avant de choisir un salon, les gens demandent des recommandations aux IA.' },
    { title: 'Instagram ne suffit pas', text: 'De belles photos, ça aide. Mais l\'IA ne parcourt pas votre feed Instagram. Elle regarde vos avis, votre fiche Google et d\'autres paramètres techniques.' },
    { title: 'Les avis font tout', text: 'Un concurrent moins bien noté mais mieux dont les paramètres sont optimisés sera recommandé par l\'IA. Même si votre travail est meilleur.' },
  ],

  // Solution
  solutionTitle: 'Ce qu\'on fait pour votre&nbsp;salon',
  solutionSubtitle: 'Deux objectifs simples&nbsp;: que vos clients vous trouvent, et qu\'ils vous choisissent.',
  solutionFeatures: [
    { title: 'Être trouvé sur Google', text: 'Votre salon apparaît dans Google Maps quand quelqu\'un cherche un coiffeur dans votre ville et dans votre quartier. Votre fiche Google est complète, professionnelle. Vos avis clients travaillent pour vous.' },
    { title: 'Être recommandé par les IA', text: 'Quand un client demande «&nbsp;coiffeur près de chez moi&nbsp;» à ChatGPT, votre nom apparaît. Votre réputation en ligne donne confiance à l\'IA pour vous recommander plutôt qu\'un autre.' },
  ],

  // How It Works
  howItWorksTitle: 'Comment ça marche',
  howItWorksSubtitle: 'Un seul salon par quartier, pour vous garantir l\'exclusivité.',
  steps: [
    { number: '01', title: 'Diagnostic gratuit', text: 'On teste votre salon sur ChatGPT, Google Maps et les autres IA. Vous recevez un score sur 100 et un diagnostic clair en 24h.' },
    { number: '02', title: 'On en parle ensemble', text: 'On parcourt vos résultats ensemble. Vous comprenez ce qui bloque et ce qu\'il faut corriger en priorité pour votre salon.' },
    { number: '03', title: 'Vos clients vous trouvent', text: 'On met en place les corrections. Vos futurs clients vous trouvent sur Google et sur les IA. Score mesuré avant et après.' },
  ],

  // FAQ
  faqTitle: 'Questions fréquentes',
  faqs: [
    { question: 'J\'ai déjà un Instagram actif, c\'est pas suffisant&nbsp;?', answer: 'Instagram est excellent pour fidéliser, mais il ne vous rend pas visible sur Google ni sur les IA. Quand quelqu\'un demande «&nbsp;coiffeur près de chez moi&nbsp;» à ChatGPT, l\'IA ne parcourt pas Instagram. Elle regarde votre fiche Google, vos avis et les annuaires. On travaille sur ces canaux-là.' },
    { question: 'En combien de temps voit-on des résultats&nbsp;?', answer: 'Sur Google, les premiers effets apparaissent en quelques jours. Sur les IA comme ChatGPT, comptez 4 à 8 semaines. Nous mesurons tout avec un score avant/après pour que vous puissiez voir la différence.' },
    { question: 'Vous garantissez d\'apparaître sur ChatGPT&nbsp;?', answer: 'Non, et quiconque le promet vous ment. Les IA choisissent leurs recommandations de manière autonome. Ce que nous garantissons&nbsp;: votre salon aura toutes les conditions pour être recommandé. Et nous mesurons le résultat avec un score avant/après.' },
    { question: 'Je n\'ai pas de site web', answer: 'Ce n\'est pas un problème. L\'essentiel de votre visibilité passe par votre fiche Google, les annuaires et vos avis clients. On optimise tout ça, avec ou sans site web.' },
    { question: 'Combien de temps ça me prend&nbsp;?', answer: 'Très peu. 1 minute pour remplir le formulaire de diagnostic. Ensuite, environ 30 minutes au total pour appliquer nos recommandations. On vous guide pas à pas, c\'est essentiellement du copier-coller.' },
    { question: 'Pourquoi un seul salon par quartier&nbsp;?', answer: 'Pour garantir votre exclusivité. Si on aide un concurrent dans le même quartier, ça vous dessert. On ne fait pas ça. Un seul salon par zone, point final.' },
  ],

  // Form
  formTitle: 'Votre diagnostic gratuit en 24h',
  formSubtitle: 'Remplissez le formulaire. On teste votre salon sur Google et sur les IA. Résultat en 24h, sans engagement.',
  formConfig: {
    etablissementLabel: 'Nom du salon',
    etablissementPlaceholder: 'Salon Nadia, L\'Atelier Beauté, Studio Coiffure…',
    typeLabel: 'Type d\'activité',
    typeOptions: [
      { value: 'salon-coiffure', label: 'Salon de coiffure', selected: true },
      { value: 'salon-esthetique', label: 'Institut de beauté / esthétique' },
      { value: 'barbershop', label: 'Barbershop' },
      { value: 'coiffure-esthetique', label: 'Coiffure + esthétique' },
      { value: 'autre', label: 'Autre' },
    ],
    pageSlug: 'coiffure',
  },
};
