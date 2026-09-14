---
title: Prerequisites and repository choice
description: Check a GTNH repository's own requirements before installing tools.
sidebar:
  order: 1
  badge: Draft
---

:::caution[Draft]
Verify requirements in the repository you intend to change. GTNH repositories
do not all use the same toolchain or Gradle tasks.
:::

## Choose the repository first

Start with the issue, feature, or broken behavior—not a familiar repository
name. Search the [GTNewHorizons organization](https://github.com/GTNewHorizons)
and read candidate repositories' README files, open issues, and recent pull
requests. The organization currently maintains hundreds of repositories, so a
similarly named project may be a dependency rather than the owner of the change.

If ownership is still unclear, ask in the
[official GTNH Discord](https://discord.gg/EXshrPV) and link the issue or code you
already found. Do not open identical pull requests in several repositories.

For a new standalone 1.7.10 mod, follow the current
[ExampleMod1.7.10 starter instructions](https://github.com/GTNewHorizons/ExampleMod1.7.10#getting-started).
The project explicitly says to use its starter archive instead of forking the
example repository.

## Read the repository as the specification

Before installing a JDK or running Gradle, inspect these files when present:

- `README.md` and contribution files for repository-specific workflow.
- `.java-version` and Gradle toolchain configuration for the expected JDK.
- `gradle/wrapper/gradle-wrapper.properties` for the repository's Gradle version.
- `.github/workflows/` for the tasks and environment used by CI.
- `gradle.properties`, `dependencies.gradle` or `.kts` variants for project settings.

For example, the current
[ExampleMod `.java-version`](https://github.com/GTNewHorizons/ExampleMod1.7.10/blob/master/.java-version)
and [Gradle wrapper](https://github.com/GTNewHorizons/ExampleMod1.7.10/blob/master/gradle/wrapper/gradle-wrapper.properties)
state their requirements directly. Treat those files as repository facts, not
as a universal GTNH policy.

## Install only the basics

You normally need:

- Git and a GitHub account.
- A JDK matching the selected repository.
- IntelliJ IDEA with Gradle support.
- Enough free disk space for source, Gradle caches, and a development instance.

Check what your shell will actually use:

```console
git --version
java -version
```

**Expected result:** both commands print version information, and the Java
version matches the selected repository's checked-in configuration. If it does
not, go to [Wrong Java version](/gtnh-developer-handbook/troubleshooting/common-problems/#wrong-java-version).

## Before you continue

You should now have one target repository, its contribution instructions open,
and a matching JDK. Next, [fork, clone, and import it](/gtnh-developer-handbook/start-here/setup/).
