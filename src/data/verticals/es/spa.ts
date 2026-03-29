import type { VerticalData } from '../types';

export const data: VerticalData = {
  // Meta
  title: 'Spa y Bienestar — Eddie Miller Agency',
  description: 'Tus futuros clientes buscan un spa en ChatGPT y Google. Hacemos que te encuentren. Diagnostico gratuito en 24h.',
  canonicalUrl: 'https://eddiemiller.agency/es/spa',
  ogTitle: 'Spa y Bienestar — Eddie Miller Agency',
  ogDescription: 'Tus futuros clientes buscan un spa en ChatGPT y Google. Hacemos que te encuentren. Diagnostico gratuito en 24h.',

  // Hero
  badge: 'Especialista en bienestar y spa',
  headline: '<span class="text-reveal-line block"><span>Tus futuros clientes buscan un spa en su barrio.</span></span><span class="text-reveal-line block"><span>La IA les responde, con o sin&nbsp;ti.</span></span>',
  heroText: 'Relax, masajes, tratamientos faciales: cuando alguien busca un momento de bienestar, ya no solo pregunta a sus amigos. Escribe "mejor spa cerca de mi" en Google o se lo pregunta a ChatGPT. Si tu centro no aparece, esos clientes iran a otro. Hacemos que vengan a&nbsp;ti.',
  ctaText: 'Solicitar mi diagnostico gratuito',
  secondaryCtaText: 'Ver como funciona ↓',
  trust1: '✓ Diagnostico en 24h',
  trust2: '✓ 100 % gratuito',
  trust3: '✓ 1 solo spa por barrio',
  plausibleLocation: 'spa-hero',

  // Social Proof
  socialProofLabel: 'Tus futuros clientes te buscan aqui',

  // What You Get
  whatYouGetTitle: 'Lo que recibes en&nbsp;24h',
  whatYouGetSubtitle: 'Un diagnostico completo de tu spa, no un simple email.',
  deliverables: [
    { title: 'Tu puntuacion de visibilidad sobre 100', text: 'Cuando un cliente busca un spa o un masaje en tu ciudad y en tu barrio, ¿te encuentra en ChatGPT, Google Maps y las demas IA? Tu nota te lo dice.' },
    { title: 'Lo que bloquea a tus clientes', text: 'Identificamos exactamente lo que impide que las IA y Google recomienden tu spa en lugar de un competidor.' },
    { title: '3 acciones prioritarias', text: 'Las correcciones clasificadas por impacto. Lo que hara subir tu puntuacion mas rapido, sin jerga tecnica.' },
    { title: 'Una llamada de 15 minutos', text: 'Revisamos tus resultados juntos, respondemos a tus preguntas y definimos los siguientes pasos si lo deseas.' },
  ],

  // Testimonial
  testimonial: {
    quote: '"Clientas nos llaman diciendo que encontraron nuestro spa en ChatGPT. Reservan un masaje sin siquiera comparar con otros sitios. No nos lo esperabamos en absoluto."',
    name: 'Claire B.',
    role: 'Spa e instituto, Centro',
    beforeScore: 6,
    beforeLabel: 'Puntuacion de visibilidad',
    beforeDetail: '"Muy pocos clientes nuevos"',
    afterDelay: 'Despues de 8 semanas',
    afterScore: 82,
    afterLabel: 'Puntuacion de visibilidad',
    afterDetail: '+20 reservas/mes',
  },

  // Stats
  statsTitle: 'Lo que ha cambiado para el&nbsp;bienestar',
  statsSubtitle: 'El bienestar es un mercado competitivo. Tus clientes comparan antes de reservar. Y cada vez mas le preguntan directamente a ChatGPT: "el mejor spa cerca de mi". Hacemos que tu spa aparezca en esos 3 a 5 resultados, para que esos clientes reserven contigo.',
  stats: [
    { countTo: 52, suffix: '%', text: 'de los clientes usan Google o una IA para encontrar un spa', source: 'BrightLocal, 2026' },
    { countTo: 83, suffix: '%', text: 'de los spas e institutos son invisibles en ChatGPT', source: 'Local Falcon, 2026' },
    { staticValue: '3 a 5', text: 'resultados: es todo lo que ChatGPT muestra cuando alguien busca un spa' },
  ],

  // Problems
  problemsTitle: 'Los problemas que ya&nbsp;conoces',
  problems: [
    { title: 'El boca a boca ya no es suficiente', text: 'Tus clientas fieles aun te recomiendan. Pero los nuevos clientes escriben "mejor spa cerca de mi" en Google o se lo preguntan a ChatGPT. Sin una presencia online fuerte, no te encuentran.' },
    { title: 'Las plataformas se llevan su parte', text: 'Las plataformas de reservas cobran comision por cada cita. Cuando la IA te recomienda directamente, los clientes vienen a ti sin intermediarios y sin comisiones.' },
    { title: 'El ambiente no se transmite solo', text: 'Tu spa es unico: la atmosfera, los tratamientos, la atencion. Pero la IA no lo sabe si tu presencia online no cuenta esa historia con claridad.' },
  ],

  // Solution
  solutionTitle: 'Lo que hacemos por tu&nbsp;spa',
  solutionSubtitle: 'Dos objetivos simples: que tus clientes te encuentren y que reserven contigo.',
  solutionFeatures: [
    { title: 'Que te encuentren en Google', text: 'Tu spa aparece en Google Maps cuando alguien busca un masaje o un tratamiento en tu ciudad y en tu barrio. Tu ficha de Google esta completa y profesional. Tus resenas trabajan para ti.' },
    { title: 'Que la IA te recomiende', text: 'Cuando un cliente pregunta "spa relajante cerca de mi" a ChatGPT, tu nombre aparece. Tu reputacion online le da confianza a la IA para recomendarte a ti en lugar de a otro.' },
  ],

  // How It Works
  howItWorksTitle: 'Como funciona',
  howItWorksSubtitle: 'Un solo spa por barrio, para garantizarte la exclusividad.',
  steps: [
    { number: '01', title: 'Diagnostico gratuito', text: 'Probamos tu spa en ChatGPT, Google Maps y las demas IA. Recibes una puntuacion sobre 100 y un diagnostico claro en 24h.' },
    { number: '02', title: 'Lo hablamos juntos', text: 'Revisamos tus resultados juntos. Entiendes lo que bloquea y lo que hay que corregir como prioridad para tu spa.' },
    { number: '03', title: 'Tus clientes te encuentran', text: 'Implementamos las correcciones. Tus futuros clientes te encuentran en Google y en las IA. Puntuacion medida antes y despues.' },
  ],

  // FAQ
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    { question: '¿Esto sustituye a las plataformas de reservas?', answer: 'No, es complementario. Las plataformas de reservas sirven para gestionar las citas. Nosotros intervenimos antes: ayudamos a que los clientes descubran tu spa antes de llegar a esas plataformas. Mas visibilidad = mas reservas directas, sin comision.' },
    { question: '¿En cuanto tiempo se ven resultados?', answer: 'En Google, los primeros efectos aparecen en pocos dias. En las IA como ChatGPT, cuenta con 4 a 8 semanas. Medimos todo con una puntuacion antes/despues para que puedas ver la diferencia.' },
    { question: '¿Garantizan aparecer en ChatGPT?', answer: 'No, y cualquiera que lo prometa te esta mintiendo. Las IA eligen sus recomendaciones de forma autonoma. Lo que garantizamos: tu spa tendra todas las condiciones para ser recomendado. Y medimos el resultado con una puntuacion antes/despues.' },
    { question: 'No tengo pagina web', answer: 'No es un problema. La mayor parte de tu visibilidad pasa por tu ficha de Google, los directorios de bienestar y tus resenas de clientes. Optimizamos todo eso, con o sin pagina web.' },
    { question: '¿Cuanto tiempo me lleva?', answer: 'Muy poco. 1 minuto para rellenar el formulario de diagnostico. Despues, unos 30 minutos en total para aplicar nuestras recomendaciones. Te guiamos paso a paso, es basicamente copiar y pegar.' },
    { question: '¿Por que un solo spa por barrio?', answer: 'Para garantizar tu exclusividad. Si ayudamos a un competidor en el mismo barrio, te perjudica. No hacemos eso. Un solo spa por zona, punto final.' },
  ],

  // Form
  formTitle: 'Tu diagnostico gratuito en 24h',
  formSubtitle: 'Rellena el formulario. Probamos tu spa en Google y en las IA. Resultado en 24h, sin compromiso.',
  formConfig: {
    etablissementLabel: 'Nombre del negocio',
    etablissementPlaceholder: 'Spa Serenidad, Centro Bienestar Zen...',
    typeLabel: 'Tipo de negocio',
    typeOptions: [
      { value: 'spa', label: 'Spa', selected: true },
      { value: 'instituto-belleza', label: 'Instituto de belleza' },
      { value: 'centro-bienestar', label: 'Centro de bienestar' },
      { value: 'salon-masaje', label: 'Salon de masaje' },
      { value: 'hammam-sauna', label: 'Hammam / Sauna' },
      { value: 'otro', label: 'Otro' },
    ],
    pageSlug: 'es-spa',
  },
};
