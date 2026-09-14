---
title: Official resources and repositories
description: Authoritative starting points for GTNH development facts and support.
sidebar:
  order: 2
---

## GTNH entry points

- [GTNewHorizons GitHub organization](https://github.com/GTNewHorizons) — source
  repositories, issues, pull requests, and the organization's maintained links.
- [Official GTNH wiki](https://wiki.gtnewhorizons.com/) — general and
  player-facing documentation. This handbook does not replace it.
- [Official development wiki page](https://wiki.gtnewhorizons.com/wiki/Development)
  — the existing official development entry point; verify its instructions
  against the repository you are changing.
- [Official GTNH Discord](https://discord.gg/EXshrPV) — community and developer
  discussion. Bring repository links, logs, and what you already tried.
- [Mod support spreadsheet](https://docs.google.com/spreadsheets/d/1LHd8c4FLLHiJqsuTppF2XFTE6bh-mXE7afVwGbzOKms)
  — consult its current legend instead of guessing a mod's support status.
- [Central modpack issue tracker](https://github.com/GTNewHorizons/GT-New-Horizons-Modpack/issues)
  — pack-level reports and coordination.
- [Developer's Code of Conduct](https://github.com/GTNewHorizons/.github/blob/master/CODE_OF_CONDUCT.md)
  and [contribution guidelines](https://github.com/GTNewHorizons/.github/blob/master/CONTRIBUTING.md)
  — read the current files before submitting changes.

## Development tooling

- [ExampleMod1.7.10](https://github.com/GTNewHorizons/ExampleMod1.7.10) — starter,
  build-layout example, FAQ, and migration material for 1.7.10 mods.
- [GTNHGradle](https://github.com/GTNewHorizons/GTNHGradle) — shared GTNH Gradle
  build logic and configuration reference.
- [RetroFuturaGradle](https://github.com/GTNewHorizons/RetroFuturaGradle) — the
  underlying 1.7.10 Gradle development plugin and task documentation.
- [GTNH Actions Workflows](https://github.com/GTNewHorizons/GTNH-Actions-Workflows)
  — reusable GitHub Actions workflows referenced by many repositories.
- [MergeMasterXXL](https://github.com/GTNewHorizons/MergeMasterXXL) — automation
  used to assemble and tag coordinated mod changes.
- [DreamAssemblerXXL daily build workflow](https://github.com/GTNewHorizons/DreamAssemblerXXL/actions/workflows/daily-modpack-build.yml)
  — manually start and monitor a daily modpack build.
- [GTNH Maven repository](https://nexus.gtnewhorizons.com/) — artifact service;
  use dependency coordinates from the target repository rather than inventing
  them.

## External tool documentation

- [GitHub: contributing with forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks)
- [Gradle user manual](https://docs.gradle.org/current/userguide/userguide.html)
- [IntelliJ IDEA Gradle guide](https://www.jetbrains.com/help/idea/gradle.html)

When two sources disagree, prefer the current file in the exact repository and
commit you are changing. Ask its maintainers before turning a local convention
into a general rule.
