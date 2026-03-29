export interface FormOption {
  value: string;
  label: string;
  selected?: boolean;
}

export interface Deliverable {
  title: string;
  text: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  beforeScore: number;
  beforeLabel: string;
  beforeDetail: string;
  afterDelay: string;
  afterScore: number;
  afterLabel: string;
  afterDetail: string;
}

export interface Stat {
  /** Numeric target for counter animation. Omit for static text like "3 à 5" */
  countTo?: number;
  suffix?: string;
  /** Static display text, used when countTo is not set (e.g. "3 à 5") */
  staticValue?: string;
  text: string;
  source?: string;
}

export interface Problem {
  title: string;
  text: string;
}

export interface SolutionFeature {
  title: string;
  text: string;
}

export interface Step {
  number: string;
  title: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FormConfig {
  etablissementLabel: string;
  etablissementPlaceholder: string;
  typeLabel: string;
  typeOptions: FormOption[];
  /** The page identifier sent with the form submission (e.g. "dentistes") */
  pageSlug: string;
}

export interface VerticalData {
  // Meta
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;

  // Hero
  badge: string;
  /** Raw HTML for the h1 content — can include <span> wrappers */
  headline: string;
  heroText: string;
  ctaText: string;
  secondaryCtaText: string;
  trust1: string;
  trust2: string;
  trust3: string;
  plausibleLocation: string;

  // Social Proof
  socialProofLabel: string;

  // What You Get
  whatYouGetTitle: string;
  whatYouGetSubtitle: string;
  deliverables: [Deliverable, Deliverable, Deliverable, Deliverable];

  // Testimonial
  testimonial: Testimonial;

  // Stats
  statsTitle: string;
  statsSubtitle: string;
  stats: [Stat, Stat, Stat];

  // Problems
  problemsTitle: string;
  problems: [Problem, Problem, Problem];

  // Solution
  solutionTitle: string;
  solutionSubtitle: string;
  solutionFeatures: [SolutionFeature, SolutionFeature];

  // How It Works
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  steps: [Step, Step, Step];

  // FAQ
  faqTitle: string;
  faqs: FAQ[];

  // Form
  formTitle: string;
  formSubtitle: string;
  formConfig: FormConfig;
}
