import type { VerticalData } from '../types';

export const data: VerticalData = {
  // Meta
  title: 'Plus de voyageurs pour votre hôtel | Eddie Miller Agency',
  description: '40 % des voyageurs planifient leur séjour avec l\'IA. Votre hôtel apparaît-il quand ils demandent conseil à ChatGPT ? Diagnostic gratuit en 24h.',
  canonicalUrl: 'https://eddiemiller.agency/hotels',
  ogTitle: 'Plus de voyageurs pour votre hôtel | Eddie Miller Agency',
  ogDescription: '40 % des voyageurs planifient leur séjour avec l\'IA. Votre hôtel apparaît-il sur ChatGPT ? Diagnostic gratuit en 24h.',

  // Hero
  badge: 'Spécialiste hôtels',
  headline: '40&nbsp;% des voyageurs planifient leur séjour avec l\'IA. Votre hôtel est-il dans leurs suggestions&nbsp;?',
  heroText: 'Avant même d\'ouvrir Booking, les voyageurs demandent à ChatGPT où dormir dans votre ville. Si votre hôtel n\'apparaît pas dans ces recommandations, vous perdez des réservations chaque&nbsp;jour.',
  ctaText: 'Demander mon diagnostic gratuit',
  secondaryCtaText: 'Voir comment ça marche ↓',
  trust1: '✓ Diagnostic en 24h',
  trust2: '✓ 100 % gratuit',
  trust3: '✓ 1 seul hôtel par quartier',
  plausibleLocation: 'hotels-hero',

  // Social Proof
  socialProofLabel: 'Vos futurs clients planifient ici',

  // What You Get
  whatYouGetTitle: 'Ce que vous recevez en&nbsp;24h',
  whatYouGetSubtitle: 'Un diagnostic complet de votre hôtel, pas un simple email.',
  deliverables: [
    { title: 'Votre score de visibilité sur 100', text: 'Votre note globale sur ChatGPT, Claude, Perplexity, Gemini et Google Maps.' },
    { title: 'Ce qui bloque vos voyageurs', text: 'Ce qui empêche ChatGPT de recommander votre hôtel quand un voyageur planifie son séjour dans votre ville.' },
    { title: '3 actions prioritaires', text: 'Les corrections classées par impact : ce qui fera bouger votre score le plus vite.' },
    { title: 'Un appel de 15 minutes', text: '15 minutes pour parcourir vos résultats, répondre à vos questions et définir la suite.' },
  ],

  // Testimonial
  testimonial: {
    quote: '«&nbsp;Depuis deux mois, des clients internationaux nous disent qu\'ils nous ont trouvés grâce à ChatGPT. Des réservations directes, sans passer par Booking. On ne pensait pas que c\'était possible pour un hôtel de notre taille.&nbsp;»',
    name: 'Isabelle R.',
    role: 'Hôtel boutique, Centre-ville',
    beforeScore: 8,
    beforeLabel: 'score de visibilité IA',
    beforeDetail: '',
    afterDelay: 'Après 10 semaines',
    afterScore: 79,
    afterLabel: 'score de visibilité IA',
    afterDetail: '+22% taux d\'occupation',
  },

  // Stats
  statsTitle: 'Ce qui a changé pour les hôteliers',
  statsSubtitle: 'Booking.com perd le premier contact. Aujourd\'hui, les voyageurs demandent d\'abord à ChatGPT «&nbsp;hôtel romantique dans votre ville&nbsp;» avant d\'aller réserver. On fait en sorte que ce soit le vôtre que l\'IA recommande.',
  stats: [
    { countTo: 40, suffix: '%', text: 'des voyageurs utilisent l\'IA pour planifier leur séjour', source: 'Statista, 2025' },
    { countTo: 83, suffix: '%', text: 'des hôtels sont invisibles sur ChatGPT', source: 'Local Falcon, 2026' },
    { staticValue: '3 à 5', text: 'résultats : c\'est tout ce que l\'IA montre quand un voyageur cherche un hôtel' },
  ],

  // Problems
  problemsTitle: 'Les problèmes que vous&nbsp;connaissez',
  problems: [
    { title: 'Booking prend sa commission. L\'IA pourrait vous apporter des réservations directes.', text: 'Quand ChatGPT recommande votre hôtel, le voyageur va directement sur votre site pour réserver. Pas de commission, pas d\'intermédiaire.' },
    { title: 'Les voyageurs préparent avant de réserver', text: 'Ils demandent à l\'IA des conseils de quartier, des recommandations d\'hôtels. On fait en sorte que votre hôtel apparaisse dès cette étape de recherche.' },
    { title: 'Les avis internationaux comptent plus que jamais', text: 'L\'IA lit les avis dans toutes les langues. Des avis peu nombreux ou incohérents signifient aucune recommandation.' },
  ],

  // Solution
  solutionTitle: 'Ce que nous faisons pour votre hôtel',
  solutionSubtitle: 'On amène plus de voyageurs dans votre hôtel, via l\'IA et Google.',
  solutionFeatures: [
    { title: 'Visibilité IA', text: 'Apparaître quand un voyageur demande «&nbsp;hôtel dans votre ville&nbsp;» à ChatGPT, Claude, Gemini ou Perplexity. Être référencé sur les plateformes de voyage et annuaires qui comptent pour l\'IA. Gérer vos avis internationaux pour renforcer votre e-réputation.' },
    { title: 'Visibilité Google', text: 'Remonter dans les résultats Google Maps de votre ville et de votre quartier. Optimiser votre fiche Google Business Profile pour les voyageurs. Développer votre présence sur les requêtes locales qui comptent.' },
  ],

  // How It Works
  howItWorksTitle: 'Comment ça marche',
  howItWorksSubtitle: 'Un seul hôtel par quartier et par gamme, pour vous garantir l\'exclusivité.',
  steps: [
    { number: '01', title: 'Diagnostic gratuit', text: 'Nous testons votre hôtel sur ChatGPT, Claude, Google Maps et les assistants IA. Vous recevez votre score de visibilité sur 100.' },
    { number: '02', title: 'On en parle ensemble', text: 'Un rapport avec les actions prioritaires pour votre hôtel. Classées par impact sur vos réservations, sans jargon technique.' },
    { number: '03', title: 'Vos voyageurs vous trouvent', text: 'Nous mettons en place les optimisations. Les voyageurs vous trouvent sur ChatGPT et réservent en direct.' },
  ],

  // FAQ
  faqTitle: 'Questions fréquentes',
  faqs: [
    { question: 'Ça remplace Booking.com ?', answer: 'Non, c\'est complémentaire. Booking reste un canal important. Mais quand un voyageur vous découvre via ChatGPT, il a tendance à réserver directement sur votre site. C\'est un canal supplémentaire sans commission.' },
    { question: 'Ça fonctionne pour la clientèle internationale ?', answer: 'Oui, c\'est même là que l\'impact est le plus fort. Les voyageurs du monde entier utilisent massivement ChatGPT pour planifier leurs séjours. Nous optimisons votre visibilité dans toutes les langues.' },
    { question: 'En combien de temps mon hôtel apparaît sur ChatGPT ?', answer: 'Les premiers effets sur Google Maps apparaissent en quelques jours. Pour ChatGPT, comptez 4 à 8 semaines pour les premiers signaux, et 8 à 12 semaines pour des résultats consolidés.' },
    { question: 'Vous garantissez d\'apparaître sur ChatGPT ?', answer: 'Non, et quiconque le promet vous ment. Ce que nous garantissons : votre hôtel aura toutes les conditions pour être recommandé. Et nous mesurons le résultat avec un score avant/après.' },
    { question: 'Mon hôtel n\'a pas de site web, ça marche quand même ?', answer: 'Oui. Votre fiche Google Business Profile, vos avis, les annuaires comme TripAdvisor et les guides de voyage suffisent. Nous optimisons l\'ensemble de votre présence en ligne, pas seulement votre site.' },
    { question: 'Qu\'est-ce que je dois faire de mon côté ?', answer: 'Très peu. Un court questionnaire (5 minutes) et quelques mises à jour sur votre fiche Google. Nous vous guidons pas à pas. Temps total : environ 30 minutes.' },
    { question: 'Pourquoi un seul hôtel par quartier ?', answer: 'Parce que l\'IA ne recommande que 3 à 5 hôtels. Si nous travaillons avec votre concurrent direct, nous vous ferions concurrence à vous-même. L\'exclusivité par quartier et par gamme protège votre investissement.' },
  ],

  // Form
  formTitle: 'Votre diagnostic gratuit en 24h',
  formSubtitle: 'Diagnostic gratuit en 24h. Sans engagement, sans carte bancaire.',
  formConfig: {
    etablissementLabel: 'Nom de l\'hôtel',
    etablissementPlaceholder: 'Hôtel du Marais, Mon Bel Hôtel…',
    typeLabel: 'Type d\'activité',
    typeOptions: [
      { value: 'hotel', label: 'Hôtel', selected: true },
      { value: 'hotel-boutique', label: 'Hôtel boutique' },
      { value: 'chambre-hotes', label: 'Chambre d\'hôtes' },
      { value: 'autre', label: 'Autre' },
    ],
    pageSlug: 'hotels',
  },
};
