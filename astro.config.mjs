import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeNova from 'starlight-theme-nova';

export default defineConfig({
  site: 'https://worive.github.io',
  base: '/gtnh-developer-handbook',
  integrations: [
    starlight({
      title: 'GTNH Developer Handbook',
      description: 'Unofficial documentation for GTNH contributors',
      plugins: [starlightThemeNova()],
      editLink: {
        baseUrl: 'https://github.com/Worive/gtnh-developer-handbook/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub repository',
          href: 'https://github.com/Worive/gtnh-developer-handbook',
        },
        {
          icon: 'discord',
          label: 'Official GTNH Discord',
          href: 'https://discord.gg/EXshrPV',
        },
      ],
      sidebar: [
        { label: 'Home', slug: 'index' },
        {
          label: 'Start Here',
          items: [
            { slug: 'start-here/prerequisites' },
            { slug: 'start-here/setup' },
            { slug: 'start-here/build-and-first-pr' },
          ],
        },
        {
          label: 'How-to Guides',
          items: [
            { slug: 'how-to/change-location' },
            { slug: 'how-to/gradle-tasks' },
            { slug: 'how-to/logs' },
          ],
        },
        {
          label: 'Troubleshooting',
          items: [{ slug: 'troubleshooting/common-problems' }],
        },
        {
          label: 'Reference',
          items: [
            { slug: 'reference/glossary' },
            { slug: 'reference/resources' },
          ],
        },
      ],
    }),
  ],
});
