import type { VerticalData } from '../types';

export const data: VerticalData = {
  // Meta
  title: 'Dentistas — Eddie Miller Agency',
  description: 'Tus futuros pacientes le piden un dentista a ChatGPT. Hacemos que te encuentren. Diagnostico gratuito en 24h.',
  canonicalUrl: 'https://eddiemiller.agency/es/dentistas',
  ogTitle: 'Dentistas — Eddie Miller Agency',
  ogDescription: 'Tus futuros pacientes le piden un dentista a ChatGPT. Hacemos que te encuentren. Diagnostico gratuito en 24h.',

  // Hero
  badge: 'Especialista en clinicas dentales',
  headline: '<span class="text-reveal-line block"><span>Tus proximos pacientes te buscan en linea.</span></span><span class="text-reveal-line block"><span>Nos aseguramos de que te&nbsp;encuentren.</span></span>',
  heroText: 'Hoy en dia, un paciente que busca dentista ya no solo pregunta a sus conocidos. Escribe "dentista cerca de mi" en Google Maps, o le hace la pregunta directamente a ChatGPT. Si tu clinica no aparece en esos resultados, hacemos que&nbsp;aparezca.',
  ctaText: 'Pedir mi diagnostico gratuito',
  secondaryCtaText: 'Ver como funciona ↓',
  trust1: '✓ Diagnostico en 24h',
  trust2: '✓ 100 % gratuito',
  trust3: '✓ 1 sola clinica por barrio',
  plausibleLocation: 'es-dentistas-hero',

  // Social Proof
  socialProofLabel: 'Tus pacientes te buscan aqui',

  // What You Get
  whatYouGetTitle: 'Lo que recibes en&nbsp;24h',
  whatYouGetSubtitle: 'Un diagnostico completo de tu clinica, no un simple email.',
  deliverables: [
    {
      title: 'Tu puntuacion de visibilidad sobre 100',
      text: '¿Un paciente que busca dentista en tu ciudad y en tu barrio te encuentra en ChatGPT, Claude, Google Maps y las otras IA? Tu nota te lo dice.',
    },
    {
      title: 'Lo que bloquea a tus pacientes',
      text: 'Identificamos exactamente lo que impide que las IA y Google recomienden tu clinica en lugar de otra.',
    },
    {
      title: '3 acciones prioritarias',
      text: 'Las correcciones ordenadas por impacto. Lo que hara mover tu puntuacion mas rapido, sin jerga tecnica.',
    },
    {
      title: 'Una llamada de 15 minutos',
      text: 'Revisamos tus resultados juntos, respondemos tus preguntas y definimos los siguientes pasos si lo deseas.',
    },
  ],

  // Testimonial
  testimonial: {
    quote: '«&nbsp;Desde hace dos meses, pacientes nos llaman diciendo que encontraron nuestra clinica en ChatGPT. Ni siquiera sabiamos que eso era posible.&nbsp;»',
    name: 'Dr. Sophie M.',
    role: 'Clinica dental, Centro',
    beforeScore: 0,
    beforeLabel: 'Puntuacion de visibilidad',
    beforeDetail: '«&nbsp;Ningun paciente por internet&nbsp;»',
    afterDelay: 'Despues de 8 semanas',
    afterScore: 86,
    afterLabel: 'Puntuacion de visibilidad',
    afterDetail: '+12 nuevos pacientes/mes',
  },

  // Stats
  statsTitle: 'Lo que ha cambiado para los&nbsp;dentistas',
  statsSubtitle: 'Antes, tus pacientes llegaban por el boca a boca o por plataformas de citas. Hoy, cada vez mas le preguntan directamente a ChatGPT: "un buen dentista cerca de mi". Hacemos que tu clinica forme parte de esos 3 a 5 resultados.',
  stats: [
    {
      countTo: 45,
      suffix: '%',
      text: 'de los pacientes usan ChatGPT para encontrar un dentista',
      source: 'BrightLocal, 2026',
    },
    {
      countTo: 83,
      suffix: '%',
      text: 'de las clinicas dentales son invisibles en ChatGPT',
      source: 'Local Falcon, 2026',
    },
    {
      staticValue: '3 a 5',
      text: 'resultados: es todo lo que ChatGPT muestra cuando un paciente busca un dentista',
    },
  ],

  // Problems
  problemsTitle: 'Los problemas que ya&nbsp;conoces',
  problems: [
    {
      title: 'Las plataformas de citas ya no bastan',
      text: 'Tus pacientes actuales aun te encuentran en las plataformas de citas. Pero los nuevos pacientes empiezan por preguntar a ChatGPT o Google. Y la IA no conoce esas plataformas.',
    },
    {
      title: 'Las resenas de Google marcan la diferencia',
      text: 'Un colega con mas resenas y respuestas cuidadas sera recomendado por la IA, aunque tus competencias clinicas sean superiores. La IA juzga por lo que ve en linea.',
    },
    {
      title: 'El boca a boca se agota',
      text: 'Recibes menos recomendaciones que antes. Los pacientes mas jovenes ya no preguntan a sus conocidos, le hacen la pregunta a ChatGPT.',
    },
  ],

  // Solution
  solutionTitle: 'Lo que hacemos por tu&nbsp;clinica',
  solutionSubtitle: 'Dos objetivos simples: que tus pacientes te encuentren y que te elijan.',
  solutionFeatures: [
    {
      title: 'Aparecer en Google',
      text: 'Tu clinica aparece en Google Maps cuando alguien busca un dentista en tu ciudad y en tu barrio. Tu ficha de Google esta completa y profesional. Tus resenas de pacientes trabajan para ti.',
    },
    {
      title: 'Ser recomendado por las IA',
      text: 'Cuando un paciente pregunta "dentista cerca de mi" a ChatGPT, tu nombre aparece. Tu reputacion en linea da confianza a la IA para recomendarte en lugar de otro.',
    },
  ],

  // How It Works
  howItWorksTitle: 'Como funciona',
  howItWorksSubtitle: 'Una sola clinica dental por barrio, para garantizarte la exclusividad.',
  steps: [
    {
      number: '01',
      title: 'Diagnostico gratuito',
      text: 'Probamos tu clinica en ChatGPT, Claude, Google Maps y las otras IA. Recibes una puntuacion sobre 100 y un diagnostico claro en 24h.',
    },
    {
      number: '02',
      title: 'Lo hablamos juntos',
      text: 'Revisamos tus resultados juntos. Entiendes lo que bloquea y lo que hay que corregir como prioridad para tu clinica.',
    },
    {
      number: '03',
      title: 'Tus pacientes te encuentran',
      text: 'Implementamos las correcciones. Tus futuros pacientes te encuentran en Google y en las IA. Puntuacion medida antes y despues.',
    },
  ],

  // FAQ
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      question: '¿Esto reemplaza las plataformas de citas medicas?',
      answer: 'No, es complementario. Las plataformas de citas sirven para agendar consultas. Nosotros intervenimos antes: ayudamos a los pacientes a descubrir tu clinica antes de que lleguen a esas plataformas. Mas visibilidad = mas citas agendadas.',
    },
    {
      question: '¿En cuanto tiempo se ven resultados?',
      answer: 'En Google, los primeros efectos aparecen en pocos dias. En las IA como ChatGPT, cuenta con 4 a 8 semanas. Medimos todo con una puntuacion antes/despues para que puedas ver la diferencia.',
    },
    {
      question: '¿Garantizan aparecer en ChatGPT?',
      answer: 'No, y quien lo prometa te esta mintiendo. Las IA eligen sus recomendaciones de forma autonoma. Lo que garantizamos: tu clinica tendra todas las condiciones para ser recomendada. Y medimos el resultado con una puntuacion antes/despues.',
    },
    {
      question: 'No tengo pagina web',
      answer: 'No es un problema. Lo esencial de tu visibilidad pasa por tu ficha de Google, los directorios de salud y tus resenas de pacientes. Optimizamos todo eso, con o sin pagina web.',
    },
    {
      question: '¿Cuanto tiempo me lleva?',
      answer: 'Muy poco. 1 minuto para rellenar el formulario de diagnostico. Luego, unos 30 minutos en total para aplicar nuestras recomendaciones. Te guiamos paso a paso, es basicamente copiar y pegar.',
    },
    {
      question: '¿Por que una sola clinica por barrio?',
      answer: 'Para garantizar tu exclusividad. Queremos que los resultados jueguen a tu favor, no en tu contra. Una sola clinica dental por zona, punto final.',
    },
  ],

  // Form
  formTitle: 'Tu diagnostico gratuito en 24h',
  formSubtitle: 'Rellena el formulario. Probamos tu clinica en Google y en las IA. Resultado en 24h, sin compromiso.',
  formConfig: {
    etablissementLabel: 'Nombre de la clinica',
    etablissementPlaceholder: 'Clinica Dental Martinez, Centro Dental del Sur...',
    typeLabel: 'Tipo de actividad',
    typeOptions: [
      { value: 'dentista', label: 'Clinica dental', selected: true },
      { value: 'ortodontista', label: 'Clinica de ortodoncia' },
      { value: 'centro-dental', label: 'Centro dental' },
      { value: 'otro', label: 'Otro' },
    ],
    pageSlug: 'es-dentistas',
  },
};
