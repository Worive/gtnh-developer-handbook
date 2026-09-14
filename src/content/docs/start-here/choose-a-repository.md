---
title: Choose a repository
description: Find the GTNH repository that owns the change you want to make.
sidebar:
  order: 2
---

Start with the issue, feature, or broken behavior—not a familiar repository
name. Search the [GTNewHorizons organization](https://github.com/GTNewHorizons)
and read candidate repositories' README files, open issues, and recent pull
requests. A similarly named project may be a dependency rather than the owner
of the change.

If ownership is still unclear, use
[Find where a change belongs](/gtnh-developer-handbook/how-to/find-change-location/)
or ask in the [official GTNH Discord](https://discord.gg/EXshrPV) with the issue
and code you already found. Do not open identical pull requests in several
repositories.

For a new standalone 1.7.10 mod, follow the current
[ExampleMod1.7.10 starter instructions](https://github.com/GTNewHorizons/ExampleMod1.7.10#getting-started).
Use its starter archive rather than forking the example repository.

## Read the repository as the specification

Inspect these files when present:

- `README.md` and contribution files for repository-specific workflow;
- `.java-version` and Gradle toolchains for the expected JDK;
- `gradle/wrapper/gradle-wrapper.properties` for the Gradle version;
- `.github/workflows/` for the tasks and environment used by CI; and
- `gradle.properties` and dependency files for project settings.

Treat those checked-in files as repository facts, not universal GTNH policy.
Next, [fork, clone, and import it](/gtnh-developer-handbook/start-here/fork-clone-and-import/).
