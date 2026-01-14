
import { Feature, ProcessStep, Project, PricingPlan, FAQItem } from './types';

export const FEATURES: Feature[] = [
  {
    id: '1',
    icon: 'verified_user',
    title: 'Predictable Results',
    description: 'Eliminate the guesswork. We deliver pixel-perfect implementations of your designs, tested rigorously before every single handover.'
  },
  {
    id: '2',
    icon: 'bolt',
    title: 'Fast Execution',
    description: 'Speed is a feature. Our productized workflow allows us to ship features weekly, keeping your momentum high and backlog low.'
  },
  {
    id: '3',
    icon: 'forum',
    title: 'Direct Communication',
    description: 'No middle managers playing telephone. You speak directly with the engineers and designers building your product in a shared Slack channel.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: '1',
    number: '01',
    title: 'Scope',
    description: 'We analyze your requirements, define technical feasibility, and create a solid roadmap for the MVP.'
  },
  {
    id: '2',
    number: '02',
    title: 'Design',
    description: 'Visualizing the product with high-fidelity wireframes, UI kits, and interactive prototypes.'
  },
  {
    id: '3',
    number: '03',
    title: 'Build',
    description: 'Writing clean, scalable code using modern frameworks. Weekly sprints and live preview updates.'
  },
  {
    id: '4',
    number: '04',
    title: 'Launch',
    description: 'Deployment to production servers, final QA checks, and post-launch monitoring and support.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Fintech Dashboard',
    type: 'Web App',
    category: 'Fintech',
    imageBg: '#f0f2f5'
  },
  {
    id: '2',
    title: 'Mindful Meditation',
    type: 'Mobile App',
    category: 'Health',
    imageBg: '#f8f5f2',
    offset: true
  },
  {
    id: '3',
    title: 'Fresh Market',
    type: 'UX/UI',
    category: 'Retail',
    imageBg: '#f0fdf4'
  },
  {
    id: '4',
    title: 'TaskFlow SaaS',
    type: 'Product Design',
    category: 'B2B',
    imageBg: '#f5f3ff',
    offset: true
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1',
    name: 'MVP Build',
    subtitle: 'Perfect for validating ideas quickly.',
    price: '$2,999',
    features: ['React/Next.js Setup', 'Basic CMS Integration', 'Responsive Design', '2 Weeks Support'],
    ctaText: 'Get Started'
  },
  {
    id: '2',
    name: 'Dedicated Team',
    subtitle: 'Your own dev department.',
    price: '$4,999',
    period: '/mo',
    isPopular: true,
    features: ['Senior Full Stack Dev', 'Unlimited Requests', 'Project Manager Included', 'Daily Updates via Slack', 'Pause or Cancel Anytime'],
    ctaText: 'Get Started'
  },
  {
    id: '3',
    name: 'Enterprise',
    subtitle: 'For large scale applications.',
    price: '$9,999',
    period: '/mo',
    features: ['Full Pod (Dev, Design, PM)', 'SLA & Priority Support', 'Custom Infrastructure', '24/7 Monitoring'],
    ctaText: 'Contact Us'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'How fast can you start?',
    answer: 'Usually within 24-48 hours. Once you subscribe or pay the deposit, we set up your private Slack channel and project boards immediately.'
  },
  {
    id: '2',
    question: 'What is your tech stack?',
    answer: 'We specialize in modern JavaScript ecosystems: React, Next.js, Node.js, and Tailwind CSS. For mobile, we use React Native.'
  },
  {
    id: '3',
    question: 'Can I pause my subscription?',
    answer: 'Yes! If you don\'t have enough work to fill a month, you can pause your subscription and save the remaining days for later.'
  }
];

export const CLIENT_LOGOS = ['AcmeCorp', 'BoltShift', 'GlobalBank', 'Nietzsche', 'Umbrella', 'CyberDyne', 'Massive'];
