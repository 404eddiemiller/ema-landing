import type { VerticalData } from '../types';

export const data: VerticalData = {
  // Meta
  title: 'Kapsalons — Eddie Miller Agency',
  description: 'Uw toekomstige klanten vragen een kapper aan ChatGPT. Wij zorgen ervoor dat ze bij u binnenstappen. Gratis diagnose binnen 24 uur.',
  canonicalUrl: 'https://eddiemiller.agency/nl/kapsalons',
  ogTitle: 'Kapsalons — Eddie Miller Agency',
  ogDescription: 'Uw toekomstige klanten vragen een kapper aan ChatGPT. Wij zorgen ervoor dat ze bij u binnenstappen. Gratis diagnose binnen 24 uur.',

  // Hero
  badge: 'Specialist kapsalons & schoonheid',
  headline: '<span class="text-reveal-line block"><span>«&nbsp;Beste kapper bij mij in de buurt&nbsp;»</span></span><span class="text-reveal-line block"><span>AI geeft 3 namen.</span></span><span class="text-reveal-line block"><span>Wij zorgen ervoor dat de uwe erbij&nbsp;hoort.</span></span>',
  heroText: 'Uw klanten stappen niet meer zomaar naar binnen. Voordat ze een salon kiezen, checken ze Google en vragen ze aanbevelingen aan AI. Als uw salon niet in die resultaten verschijnt, gaan deze klanten ergens anders heen. Wij zorgen ervoor dat ze bij u&nbsp;komen.',
  ctaText: 'Mijn gratis diagnose aanvragen',
  secondaryCtaText: 'Bekijk hoe het werkt ↓',
  trust1: '✓ Diagnose binnen 24 uur',
  trust2: '✓ 100 % gratis',
  trust3: '✓ 1 salon per wijk',
  plausibleLocation: 'kapsalons-hero',

  // Social Proof
  socialProofLabel: 'Uw toekomstige klanten zoeken u hier',

  // What You Get
  whatYouGetTitle: 'Wat u ontvangt binnen&nbsp;24 uur',
  whatYouGetSubtitle: 'Een volledige diagnose van uw salon, niet zomaar een e-mail.',
  deliverables: [
    { title: 'Uw zichtbaarheidsscore op 100', text: 'Vindt een klant die een kapper zoekt in uw stad en in uw wijk u op ChatGPT, Google Maps en de andere AI\'s? Uw score vertelt het&nbsp;u.' },
    { title: 'Wat uw klanten tegenhoudt', text: 'Wij identificeren precies wat AI en Google ervan weerhoudt om uw salon aan te bevelen in plaats van een andere.' },
    { title: '3 prioritaire acties', text: 'De correcties gerangschikt op impact. Wat uw score het snelst zal verbeteren, zonder technisch jargon.' },
    { title: 'Een gesprek van 15 minuten', text: 'We bespreken uw resultaten samen, beantwoorden uw vragen en bepalen de vervolgstappen als u dat wenst.' },
  ],

  // Testimonial
  testimonial: {
    quote: '«&nbsp;Klanten komen binnen en zeggen dat ze de salon op ChatGPT hebben gevonden toen ze zochten naar een colorist in hun wijk. We wisten niet eens dat dit bestond.&nbsp;»',
    name: 'Nadia K.',
    role: 'Kapsalon, Centrum',
    beforeScore: 4,
    beforeLabel: 'Zichtbaarheidsscore',
    beforeDetail: '«&nbsp;Online onzichtbaar&nbsp;»',
    afterDelay: 'Na 6 weken',
    afterScore: 78,
    afterLabel: 'Zichtbaarheidsscore',
    afterDetail: '+15 nieuwe klanten/maand',
  },

  // Stats
  statsTitle: 'Wat er veranderd is voor&nbsp;salons',
  statsSubtitle: 'Spontaan langs de etalage lopen, dat bestaat nog. Maar steeds meer klanten doen hun onderzoek voordat ze zich verplaatsen. Ze vragen Google of ChatGPT: «&nbsp;een goede kapper bij mij in de buurt&nbsp;». Wij zorgen ervoor dat uw salon in die 3 tot 5 resultaten verschijnt, zodat u de afspraak krijgt.',
  stats: [
    { countTo: 45, suffix: '%', text: 'van de consumenten gebruikt AI om een lokale activiteit te kiezen', source: 'BrightLocal, 2026' },
    { countTo: 83, suffix: '%', text: 'van de salons is onzichtbaar op ChatGPT', source: 'Local Falcon, 2026' },
    { staticValue: '3 tot 5', text: 'resultaten: dat is alles wat ChatGPT toont wanneer een klant een kapper zoekt' },
  ],

  // Problems
  problemsTitle: 'De problemen die u&nbsp;kent',
  problems: [
    { title: 'Klanten stappen niet meer zomaar binnen', text: 'Spontaan binnenlopen neemt af. Voordat ze een salon kiezen, checken mensen Google en vragen ze aanbevelingen aan AI.' },
    { title: 'Instagram is niet genoeg', text: 'Mooie foto\'s helpen. Maar AI doorloopt uw Instagram-feed niet. Het kijkt naar uw reviews, uw Google-vermelding en professionele gidsen.' },
    { title: 'Reviews maken alles uit', text: 'Een concurrent met 200 reviews en 4,8 sterren wordt door AI aanbevolen. Zelfs als uw werk beter is, ziet AI dat niet als uw online reputatie het niet vertelt.' },
  ],

  // Solution
  solutionTitle: 'Wat wij doen voor uw&nbsp;salon',
  solutionSubtitle: 'Twee eenvoudige doelen: dat uw klanten u vinden, en dat ze voor u kiezen.',
  solutionFeatures: [
    { title: 'Gevonden worden op Google', text: 'Uw salon verschijnt in Google Maps wanneer iemand een kapper zoekt in uw stad en in uw wijk. Uw Google-vermelding is compleet en professioneel. Uw klantreviews werken voor u.' },
    { title: 'Aanbevolen worden door AI', text: 'Wanneer een klant «&nbsp;kapper bij mij in de buurt&nbsp;» vraagt aan ChatGPT, verschijnt uw naam. Uw online reputatie geeft AI het vertrouwen om u aan te bevelen in plaats van een ander.' },
  ],

  // How It Works
  howItWorksTitle: 'Hoe het werkt',
  howItWorksSubtitle: 'Slechts één salon per wijk, om uw exclusiviteit te garanderen.',
  steps: [
    { number: '01', title: 'Gratis diagnose', text: 'Wij testen uw salon op ChatGPT, Google Maps en de andere AI\'s. U ontvangt een score op 100 en een duidelijke diagnose binnen 24 uur.' },
    { number: '02', title: 'We bespreken het samen', text: 'We doorlopen uw resultaten samen. U begrijpt wat er blokkeert en wat er prioritair gecorrigeerd moet worden voor uw salon.' },
    { number: '03', title: 'Uw klanten vinden u', text: 'Wij voeren de correcties door. Uw toekomstige klanten vinden u op Google en via AI. Score gemeten voor en na.' },
  ],

  // FAQ
  faqTitle: 'Veelgestelde vragen',
  faqs: [
    { question: 'Ik heb al een actief Instagram, is dat niet genoeg?', answer: 'Instagram is uitstekend voor klantenbinding, maar het maakt u niet zichtbaar op Google of AI. Wanneer iemand «&nbsp;kapper bij mij in de buurt&nbsp;» vraagt aan ChatGPT, doorloopt AI geen Instagram. Het kijkt naar uw Google-vermelding, uw reviews en gidsen. Daar werken wij aan.' },
    { question: 'Hoe snel ziet u resultaten?', answer: 'Op Google verschijnen de eerste effecten binnen enkele dagen. Op AI\'s zoals ChatGPT duurt het 4 tot 8 weken. Wij meten alles met een score voor en na, zodat u het verschil kunt zien.' },
    { question: 'Garandeert u dat ik op ChatGPT verschijn?', answer: 'Nee, en wie dat wel belooft, liegt. AI kiest zelf welke aanbevelingen het doet. Wat wij garanderen: uw salon zal alle voorwaarden vervullen om aanbevolen te worden. En wij meten het resultaat met een score voor en na.' },
    { question: 'Ik heb geen website', answer: 'Dat is geen probleem. Het grootste deel van uw zichtbaarheid komt via uw Google-vermelding, gidsen en uw klantreviews. Wij optimaliseren dat allemaal, met of zonder website.' },
    { question: 'Hoeveel tijd kost het mij?', answer: 'Heel weinig. 1 minuut om het diagnoseformulier in te vullen. Daarna in totaal ongeveer 30 minuten om onze aanbevelingen toe te passen. Wij begeleiden u stap voor stap, het is voornamelijk kopiëren en plakken.' },
    { question: 'Waarom slechts één salon per wijk?', answer: 'Om uw exclusiviteit te garanderen. Als wij een concurrent in dezelfde wijk helpen, werkt dat tegen u. Dat doen wij niet. Eén salon per gebied, punt.' },
  ],

  // Form
  formTitle: 'Uw gratis diagnose binnen 24 uur',
  formSubtitle: 'Vul het formulier in. Wij testen uw salon op Google en op AI. Resultaat binnen 24 uur, zonder verplichtingen.',
  formConfig: {
    etablissementLabel: 'Naam van de salon',
    etablissementPlaceholder: 'Salon Nadia, Kapsalon De Knip…',
    typeLabel: 'Type activiteit',
    typeOptions: [
      { value: 'kapsalon', label: 'Kapsalon', selected: true },
      { value: 'schoonheidssalon', label: 'Schoonheidssalon' },
      { value: 'barbershop', label: 'Barbershop' },
      { value: 'kapper-schoonheid', label: 'Kapper + schoonheid' },
      { value: 'autre', label: 'Anders' },
    ],
    pageSlug: 'kapsalons',
  },
};
