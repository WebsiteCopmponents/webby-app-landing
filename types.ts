
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  category: string;
  imageBg: string;
  offset?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
