export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  appStoreUrl: string;
  playStoreUrl: string;
  socials: {
    discord: string;
    reddit: string;
    youtube: string;
    instagram: string;
    tiktok: string;
    email: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'WBuilds',
  tagline: 'Minecraft Building Guide, 600+ Step-by-Step Builds',
  description: 'WBuilds is a Minecraft building guide app. 600+ step-by-step builds with exact material lists, from houses to castles. Available on iOS, Android and web.',
  url: 'https://wbuilds.app',
  author: 'Indie Creator Luck',
  appStoreUrl: 'https://apps.apple.com/us/app/wbuilds-for-building-guide/id6755657280',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.indiecreatorluck.minecraftbuild',
  socials: {
    discord: 'https://discord.com/invite/BPmBTXujz2',
    reddit: 'https://www.reddit.com/r/wBuildsMinecraft/',
    youtube: 'https://www.youtube.com/channel/UC_zslI6omEpqPUdz5Mr-viw',
    instagram: 'https://www.instagram.com/wbuilds.app/',
    tiktok: 'https://www.tiktok.com/@wbuilds.app',
    email: 'contact@wbuilds.app',
  },
};
