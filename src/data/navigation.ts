import { withBase } from '../utils/paths';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: 'Browse Builds', href: withBase('/#featured-builds') },
  { label: 'How It Works', href: withBase('/how-it-works') },
  { label: 'Features', href: withBase('/features') },
  { label: 'Pricing', href: withBase('/pricing') },
  { label: 'Reviews', href: withBase('/reviews') },
  { label: 'FAQ', href: withBase('/faq') },
];

export const footerNavSections = [
  {
    title: 'Explore',
    items: [
      { label: 'Browse Builds', href: withBase('/#featured-builds') },
      { label: 'How It Works', href: withBase('/how-it-works') },
      { label: 'Features', href: withBase('/features') },
      { label: 'Pricing', href: withBase('/pricing') },
      { label: 'Reviews', href: withBase('/reviews') },
      { label: 'FAQ', href: withBase('/faq') },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: withBase('/about') },
      { label: 'Contact', href: withBase('/contact') },
      { label: 'Creator Program', href: withBase('/discount') },
      { label: 'vs YouTube & Blueprints', href: withBase('/vs-youtube-schematica') },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Terms of Service', href: withBase('/terms-of-service') },
      { label: 'Privacy Policy', href: withBase('/privacy-policy') },
      { label: 'Refund Policy', href: withBase('/refund-policy') },
    ],
  },
];
