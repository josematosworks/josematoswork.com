import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Resume', href: '#resume' },
    { text: 'Portfolio', href: '#portfolio' },
    { text: 'Github', href: 'https://github.com/josematosworks' },
  ],
  actions: [{ text: 'Download CV', href: '/pdfs/Jose_Matos_Senior_Frontend_Engineer_Resume.pdf', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/josematosworks' },
  ],
  footNote: `
    Made by José Matos. Powered by Astro. All rights reserved.
  `,
};
