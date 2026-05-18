// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://oculix.org',
  integrations: [
    starlight({
      title: 'OculiX',
      logo: {
        src: './src/assets/oculix-logo.png',
        alt: 'OculiX gecko logo',
        replacesTitle: false,
      },
      favicon: '/favicon.ico',
      customCss: ['./src/styles/custom.css'],
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/oculix-org/Oculix' },
      ],
      editLink: {
        baseUrl: 'https://github.com/oculix-org/Oculix/edit/master/oculix-site/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          translations: { fr: 'Démarrage' },
          items: [
            { slug: 'getting-started/installation' },
            { slug: 'getting-started/first-script' },
            { slug: 'getting-started/ide-tour' },
          ],
        },
        {
          label: 'Guides',
          translations: { fr: 'Guides' },
          items: [
            { slug: 'guides/visual-matching' },
            { slug: 'guides/ocr' },
            { slug: 'guides/vision-pipeline' },
            { slug: 'guides/jython' },
          ],
        },
        {
          label: 'Reference',
          translations: { fr: 'Référence' },
          items: [
            { slug: 'reference/api' },
            { slug: 'reference/cli' },
            { slug: 'reference/migration' },
          ],
        },
        {
          label: 'Community',
          translations: { fr: 'Communauté' },
          items: [
            { slug: 'community/contributing' },
            { slug: 'community/sponsors' },
            { slug: 'community/translators' },
          ],
        },
        {
          label: 'Work with us',
          translations: { fr: 'Travailler avec nous' },
          items: [
            { slug: 'support/enterprise', label: 'Overview', translations: { fr: 'Aperçu' } },
            { slug: 'support/production-support', label: 'Production support', translations: { fr: 'Support production' } },
            { slug: 'support/migration-from-rpa', label: 'Migration from RPA', translations: { fr: 'Migration depuis RPA' } },
            { slug: 'support/custom-development', label: 'Custom development', translations: { fr: 'Développement sur mesure' } },
            { slug: 'support/training', label: 'Team training', translations: { fr: 'Formation équipe' } },
            { slug: 'support/architecture-review', label: 'Architecture review', translations: { fr: 'Revue d\'architecture' } },
            { slug: 'support/security', label: 'Security & compliance', translations: { fr: 'Sécurité & conformité' } },
          ],
        },
        {
          label: 'About',
          translations: { fr: 'À propos' },
          items: [
            { slug: 'showcase', label: 'Adoption & showcase', translations: { fr: 'Adoption & vitrine' } },
          ],
        },
      ],
    }),
  ],
});
