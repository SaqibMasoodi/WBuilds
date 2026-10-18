export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period?: string;
  badge?: string;
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Get started with essential building guides.',
    price: '$0',
    period: 'forever',
    ctaText: 'Start Free',
    ctaHref: '#download',
    features: [
      '50+ Starter build guides',
      'Basic material lists',
      'Step-by-step layer view',
      'Access on iOS, Android & Web',
    ],
  },
  {
    id: 'yearly',
    name: 'Pro Yearly',
    tagline: 'Best for active survival & creative builders.',
    price: '$19.99',
    period: '/ year',
    badge: 'Popular',
    isPopular: true,
    ctaText: 'Get Pro Yearly',
    ctaHref: '#download',
    features: [
      'All 600+ building tutorials',
      'Exact material checklist & calculator',
      'Offline access to all guides',
      'All new weekly builds included',
      'Java, Bedrock & Pocket Edition support',
      'Priority Discord community support',
    ],
  },
  {
    id: 'lifetime',
    name: 'Pro Lifetime',
    tagline: 'One-time payment, lifetime unlimited access.',
    price: '$29.99',
    period: 'one-time',
    badge: 'Best Value',
    ctaText: 'Get Lifetime Access',
    ctaHref: '#download',
    features: [
      'Everything in Pro Yearly',
      'Lifetime access with zero recurring fees',
      'Every future update and expansion',
      'Direct developer feedback channel',
    ],
  },
];
