import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeNova from 'starlight-theme-nova';

export default defineConfig({
  site: 'https://worive.github.io',
  base: '/gtnh-developer-handbook',
  redirects: {
    '/how-to/run-daily-build':
      '/gtnh-developer-handbook/maintainers/run-daily-build',
  },
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
          label: 'Contributing',
          items: [{ slug: 'contributing/before-you-code' }],
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
          label: 'Concepts',
          items: [
            { slug: 'concepts/repository-map' },
            { slug: 'concepts/build-system-stack' },
            { slug: 'concepts/release-pipeline' },
          ],
        },
        {
          label: 'Maintainer Procedures',
          items: [
            { slug: 'maintainers/run-daily-build' },
            { slug: 'maintainers/tag-mod-version' },
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
