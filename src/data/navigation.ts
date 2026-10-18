export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: 'Browse Builds', href: '/#featured-builds' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
];

export const footerNavSections = [
  {
    title: 'Explore',
    items: [
      { label: 'Browse Builds', href: '/#featured-builds' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Creator Program', href: '/discount' },
      { label: 'vs YouTube & Blueprints', href: '/vs-youtube-schematica' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
    ],
  },
];
