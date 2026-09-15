import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeNova from 'starlight-theme-nova';

export default defineConfig({
  site: 'https://worive.github.io',
  base: '/gtnh-developer-handbook',
  redirects: {
    '/how-to/run-daily-build':
      '/gtnh-developer-handbook/maintainers/run-daily-build',
    '/start-here/setup':
      '/gtnh-developer-handbook/start-here/fork-clone-and-import',
    '/start-here/build-and-first-pr':
      '/gtnh-developer-handbook/start-here/build-and-run',
    '/how-to/change-location':
      '/gtnh-developer-handbook/how-to/find-change-location',
    '/how-to/logs': '/gtnh-developer-handbook/how-to/locate-logs',
    '/how-to/maven-local':
      '/gtnh-developer-handbook/how-to/test-cross-repository-changes',
    '/maintainers/tag-mod-version':
      '/gtnh-developer-handbook/maintainers/release-operations',
    '/troubleshooting/common-problems':
      '/gtnh-developer-handbook/troubleshooting/gradle',
    '/reference/resources':
      '/gtnh-developer-handbook/reference/official-resources',
    '/contributing/contribution-types':
      '/gtnh-developer-handbook/concepts/repository-map',
    '/contributing/review-and-ci':
      '/gtnh-developer-handbook/contributing/pull-request-expectations',
    '/how-to/local-gradle-overrides':
      '/gtnh-developer-handbook/how-to/gradle-tasks#use-local-overrides',
    '/reference/repository-directory':
      '/gtnh-developer-handbook/concepts/repository-map',
    '/reference/mod-support':
      '/gtnh-developer-handbook/concepts/repository-map#separate-ownership-from-support',
  },
  integrations: [
    starlight({
      title: 'GTNH Developer Handbook',
      description: 'Unofficial documentation for GTNH contributors',
      plugins: [starlightThemeNova()],
      editLink: {
        baseUrl: 'https://github.com/Worive/gtnh-developer-handbook/edit/master/',
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
            { slug: 'start-here/choose-a-repository' },
            { slug: 'start-here/fork-clone-and-import' },
            { slug: 'start-here/build-and-run' },
            { slug: 'start-here/first-pull-request' },
          ],
        },
        {
          label: 'Contributing',
          items: [
            { slug: 'contributing/before-you-code' },
            { slug: 'contributing/pull-request-expectations' },
            { slug: 'contributing/testing-expectations' },
            { slug: 'contributing/contribute-to-the-handbook' },
          ],
        },
        {
          label: 'Development Practices',
          items: [
            { slug: 'development-practices' },
            { slug: 'development-practices/localized-display-text' },
            { slug: 'development-practices/optional-mod-integrations' },
          ],
        },
        {
          label: 'Minecraft & Forge Internals',
          items: [
            { slug: 'minecraft-forge-internals/client-server-boundaries' },
            { slug: 'minecraft-forge-internals/tile-entity-state' },
            { slug: 'minecraft-forge-internals/tick-update-model' },
            { slug: 'minecraft-forge-internals/nbt-schema' },
            { slug: 'minecraft-forge-internals/chunk-boundaries' },
            { slug: 'minecraft-forge-internals/rendering-state' },
            { slug: 'minecraft-forge-internals/stacks-and-inventories' },
          ],
        },
        {
          label: 'How-to Guides',
          items: [
            { slug: 'how-to/find-change-location' },
            { slug: 'how-to/gradle-tasks' },
            { slug: 'how-to/test-cross-repository-changes' },
            { slug: 'how-to/locate-logs' },
            { slug: 'how-to/use-horizon-qa' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { slug: 'concepts/repository-map' },
            { slug: 'concepts/build-system-stack' },
            { slug: 'concepts/java-and-runtime-model' },
            { slug: 'concepts/dependencies-and-artifacts' },
            { slug: 'concepts/release-pipeline' },
          ],
        },
        {
          label: 'Maintainer Procedures',
          items: [
            { slug: 'maintainers/run-daily-build' },
            { slug: 'maintainers/run-experimental-build' },
            { slug: 'maintainers/release-operations' },
            { slug: 'maintainers/repair-maven-metadata' },
          ],
        },
        {
          label: 'Troubleshooting',
          items: [
            { slug: 'troubleshooting/java' },
            { slug: 'troubleshooting/gradle' },
            { slug: 'troubleshooting/development-client' },
            { slug: 'troubleshooting/intellij' },
            { slug: 'troubleshooting/ci' },
            { slug: 'troubleshooting/mixins-and-transformers' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { slug: 'reference/glossary' },
            { slug: 'reference/official-resources' },
          ],
        },
      ],
    }),
  ],
});
