import type { Locale } from '../i18n';
import translations from './agency-translations.json';

// Customer-facing offer copy. Publication requested by Adam on 6 September 2026.
export const agency = {
  fr: {
    title: 'Visibilité IA, automatisation & sites web à Paris — Eddie Miller Agency',
    description: 'Faites connaître votre entreprise sur ChatGPT, Google et Google Maps. Automatisez vos tâches répétitives et créez un site à la hauteur de votre savoir-faire.',
    eyebrow: 'L’intelligence artificielle. Le sens du terrain.',
    hero: ['Les bonnes adresses', 'méritent d’être', 'trouvées.'],
    intro: 'Votre prochain client vous cherche. Sur ChatGPT, sur Google, dans votre quartier. Faisons en sorte qu’il puisse vous découvrir — et que vous ayez plus de temps pour l’accueillir.',
    cta: 'Parlons de votre entreprise', secondary: 'Découvrir notre approche',
    local: 'Paris & Île-de-France', photo: 'Le savoir-faire est chez vous. Nous l’aidons à se voir.',
    nav: ['Expertises', 'Votre métier', 'La méthode', 'Nos offres'],
    pillars: ['Être trouvé', 'Gagner du temps', 'Donner envie'],
    services: ['Visibilité IA & Google Maps', 'Automatisation avec l’IA', 'Création de sites web'],
    serviceIntro: 'Trois leviers. Un même objectif : faire avancer votre entreprise.',
    visibility: ['Faites partie de', 'la conversation.'],
    visibilityText: '« Un hôtel de charme dans le Marais ? » « Un bon restaurant près de Montparnasse ? » Nous travaillons votre présence en ligne pour aider les moteurs et les assistants IA à comprendre qui vous êtes, ce que vous faites et pourquoi vous choisir.',
    visibilityList: ['Une fiche Google complète, cohérente et à jour.', 'Des pages utiles qui répondent aux vraies questions de vos clients.', 'Des informations fiables sur les sources pertinentes pour votre métier.', 'Des observations datées sur les IA, avec les questions et les sources conservées.'],
    visibilityLink: 'Explorer la visibilité IA', sourceLabel: 'Ce que nous mettons au clair',
    sources: [['Votre entreprise', 'Nom, métier, quartier, coordonnées'], ['Votre savoir-faire', 'Services, spécialités, questions fréquentes'], ['Vos preuves', 'Avis authentiques, références, sources fiables']],
    measured: 'On mesure ce qui apparaît. On ne promet pas une place.',
    auto: ['Moins de tâches.', 'Plus de métier.'],
    autoText: 'Les mêmes emails. Les mêmes documents à ranger. Les mêmes informations à recopier. Nous venons comprendre votre quotidien, puis installons des automatisations que votre équipe peut réellement utiliser.',
    autoLink: 'Voir ce qui peut être automatisé', example: 'Exemple illustratif · à adapter à vos outils',
    tabs: ['Factures', 'Demandes clients', 'Avis Google'],
    flows: [
      { trigger: 'Une facture arrive', action: 'L’IA extrait et prépare', output: 'Votre comptable valide', detail: 'Fournisseur, date, montant et pièce d’origine regroupés. Les informations incertaines sont signalées avant toute utilisation.', note: 'Préparation administrative. Aucune écriture comptable ni aucun paiement automatique.' },
      { trigger: 'Un client vous écrit', action: 'L’IA prépare une réponse', output: 'Vous relisez et envoyez', detail: 'Une proposition de réponse à partir de vos horaires, services et consignes. Une question inhabituelle vous est transmise.', note: 'Pas de réservation confirmée ni d’engagement commercial sans votre validation.' },
      { trigger: 'Un nouvel avis apparaît', action: 'L’IA propose un brouillon', output: 'Vous gardez le dernier mot', detail: 'Une réponse personnalisée au ton de votre entreprise. Les réclamations sensibles sont mises à part pour être traitées par une personne.', note: 'Des réponses à de vrais avis. Aucun avis inventé, acheté ou publié automatiquement.' },
    ],
    hermes: 'Hermes Agent, quand il est adapté', hermesText: 'Un assistant configuré pour vos tâches et vos outils. Les accès, le budget d’usage et les actions à valider sont définis avec vous. Vous gardez vos comptes et vos données.',
    web: ['Une belle adresse.', 'Une belle première impression.'],
    webText: 'Votre site doit donner envie, rassurer et faciliter le prochain pas : réserver, appeler, demander un devis. Nous créons des sites rapides, soignés sur mobile et pensés pour votre métier. Si le vôtre fait déjà le travail, nous l’améliorons.',
    webLink: 'Découvrir les sites web', webCaption: 'Une vitrine à la hauteur de ce que vous faites.',
    sectorsTitle: 'Chaque métier a ses habitudes.', sectorsIntro: 'Nous partons des vôtres.',
    sectors: ['Restaurants', 'Hôtels', 'Bars & lieux de nuit', 'Coiffure & esthétique', 'Bien-être & spas', 'Sport & fitness', 'Cabinets dentaires', 'Cabinets médicaux', 'Cabinets d’avocats'],
    other: 'Artisan, boutique, service de proximité ? Parlons de votre cas.',
    methodTitle: ['On commence chez vous.', 'On avance avec vous.'],
    steps: [['Comprendre', 'Un premier échange, puis une observation de vos besoins sur place à Paris ou à distance. Nous choisissons un problème concret à résoudre.'], ['Mettre en place', 'Un périmètre, un devis et un résultat attendu. Nous configurons, testons et expliquons le fonctionnement à votre équipe.'], ['Vérifier & améliorer', 'Les livrables sont vérifiés avec vous. Le suivi, s’il est utile, porte sur des observations et des tâches précises.']],
    faqTitle: 'Les bonnes questions, avant de commencer.',
    faqs: [['Pouvez-vous garantir une recommandation par ChatGPT ?', 'Non. Chaque assistant choisit ses sources et ses réponses. Nous améliorons votre présence, l’accès à vos informations et leur cohérence. Nous conservons les observations datées pour suivre l’évolution, sans promettre une position ou un nombre de clients.'], ['Faut-il refaire mon site ?', 'Seulement si cela a du sens. Un site existant peut souvent être amélioré. Nous examinons d’abord ce qui aide vos clients à comprendre votre offre et à vous contacter.'], ['Que peut faire Hermes Agent pour mon entreprise ?', 'Il peut aider à préparer des réponses, trier des documents ou exécuter des tâches répétitives avec les outils compatibles. Chaque usage est testé. Les actions sensibles restent soumises à validation ; les abonnements et consommations IA sont précisés au devis.'], ['Que deviennent les données de mon entreprise ?', 'Nous définissons les informations utilisées, les accès et les services auxquels elles sont transmises. Un assistant installé chez vous peut utiliser un service d’IA en ligne : ce choix est expliqué avant toute connexion.'], ['Pouvez-vous automatiser ma comptabilité ?', 'Nous pouvons préparer et classer des factures, extraire des informations et préparer un export pour votre comptable. La tenue comptable, les déclarations et les décisions fiscales restent du ressort des professionnels compétents.'], ['Comment démarre un projet ?', 'Par un échange gratuit de 15 minutes. Si le besoin est pertinent, nous proposons un diagnostic ou une prestation au périmètre défini. Aucun abonnement ni travail payant ne démarre sans votre accord.']],
    contactTitle: ['Et si on partait', 'de votre quotidien ?'],
    contactIntro: 'Dites-nous ce que vous faites et ce qui vous prend du temps. Un premier échange de 15 minutes pour voir où nous pouvons être utiles.',
    contactSmall: 'Premier échange gratuit · aucun engagement',
    footer: 'L’IA au service des entreprises de proximité.', offerTitle: ['Le bon service.', 'Au bon endroit.'],
    offerIntro: 'Une mission bien définie avant de commencer. Un devis qui précise les livrables, les délais et les coûts des outils.',
    prices: ['990 €', '1 490 €', '2 490 €'], priceLabel: 'À partir de', priceNote: 'HT · mise en place, sur devis',
    offerLists: [ ['Votre site existant et votre fiche Google, pour une adresse', 'Diagnostic initial et corrections prioritaires', 'Jusqu’à deux pages existantes améliorées', 'Relevé des mentions IA et restitution'], ['Un processus et jusqu’à deux outils compatibles', 'Installation d’un assistant si le besoin le justifie', 'Essais, règles de validation et documentation', 'Prise en main avec votre équipe'], ['Un site vitrine jusqu’à cinq pages, une langue', 'Design adapté à votre entreprise et à votre mobile', 'Formulaire, bases de référencement et mise en ligne', 'Remise des accès et prise en main'] ],
    follow: 'Un suivi qui a une raison d’être.', followText: 'Visibilité, maintenance ou évolution d’une automatisation : nous définissons les interventions incluses. Les licences, l’hébergement et les consommations IA sont chiffrés séparément.',
    followPrice: 'À partir de 290 € HT / mois', followNote: 'Optionnel · périmètre et conditions au devis',
    aboutTitle: ['Un interlocuteur.', 'Du premier échange au concret.'],
    aboutText: 'À Paris, j’aide les entreprises de proximité à mieux présenter leur savoir-faire et à utiliser l’IA dans leur quotidien. Ma démarche commence par votre métier : comprendre vos clients, vos outils et vos tâches avant de proposer une solution.',
    aboutSecond: 'Vous savez ce qui compte dans votre entreprise. Mon rôle est de transformer ce besoin en quelque chose d’utile, compréhensible et vérifiable. Une page plus claire, une présence locale mieux tenue, une tâche répétitive enfin simplifiée.',
  },
};

export const sectorKeys = ['restaurants', 'hotels', 'bars', 'hair', 'spa', 'gyms', 'dentists', 'medical', 'lawyers'];
export function getAgency(locale: Locale = 'fr'): typeof agency.fr { return locale === 'fr' ? agency.fr : (translations as Record<string, typeof agency.fr>)[locale] ?? agency.fr; }

export const serviceRoutes: Record<Locale, string[]> = {"fr": ["/visibilite-ia", "/automatisation-ia", "/creation-sites-web"], "en": ["/en/ai-visibility", "/en/ai-automation", "/en/web-design"], "es": ["/es/visibilidad-ia", "/es/automatizacion-ia", "/es/sitios-web"], "de": ["/de/ki-sichtbarkeit", "/de/ki-automatisierung", "/de/webdesign"], "it": ["/it/visibilita-ia", "/it/automazione-ia", "/it/siti-web"], "pt": ["/pt/visibilidade-ia", "/pt/automacao-ia", "/pt/sites-web"], "nl": ["/nl/ai-zichtbaarheid", "/nl/ai-automatisering", "/nl/webdesign"]};
