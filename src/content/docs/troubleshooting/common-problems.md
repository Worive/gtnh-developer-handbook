---
title: Common development problems
description: Short diagnostic checklists for Java, Gradle, client startup, IntelliJ, and CI.
sidebar:
  order: 1
---

:::caution[Draft]
These checks deliberately avoid a universal Java version or task name. The
selected repository's current files and workflow are authoritative.
:::

## Wrong Java version

**Signs:** Gradle refuses to start, reports an unsupported class-file version,
cannot find a toolchain, or IntelliJ and the terminal behave differently.

1. Read `.java-version`, `gradle.properties`, build scripts, and CI workflow in
   the current checkout.
2. Run `java -version` in the same terminal that starts Gradle.
3. Check the Gradle JVM selected in IntelliJ separately; it can differ from your
   shell.
4. Point both environments at the repository-required JDK, then reload Gradle.

Do not apply one JDK number to all GTNH repositories. For example,
[ExampleMod currently checks in a `.java-version`](https://github.com/GTNewHorizons/ExampleMod1.7.10/blob/master/.java-version),
while repositories without that file may declare toolchains elsewhere.

## Gradle import or dependency failures

**Signs:** IntelliJ cannot load the Gradle model, artifacts time out, or tasks
cannot be listed.

1. Confirm you opened the repository root and selected the checked-in wrapper.
2. Run the wrapper's `tasks --all` command in a terminal. This separates an IDE
   problem from a build problem.
3. Read the first failed repository URL or dependency coordinate. Check network,
   proxy, certificate, and credential errors without deleting all caches first.
4. Compare repository and dependency declarations with the current checkout.
5. Retry after a transient service failure; use cache deletion only when the
   error identifies a corrupt artifact.

The current ExampleMod keeps dependency and repository declarations in
[separate files](https://github.com/GTNewHorizons/ExampleMod1.7.10), but older or
specialized repositories may not. Capture evidence with
[Locating logs](/gtnh-developer-handbook/how-to/logs/).

## Development client does not start

**Signs:** the run task exits, the game window never appears, or startup crashes.

1. Confirm the chosen run task exists in `tasks --all`.
2. Run it from the terminal once so the complete Gradle output is preserved.
3. Follow the printed working-directory, log, or crash-report paths.
4. Find the first exception caused by project code or a dependency; later errors
   may only describe shutdown.
5. Compare JVM arguments and working directory with the generated IntelliJ run
   configuration before changing memory or graphics settings.

GTNHGradle's current
[IDE integration](https://github.com/GTNewHorizons/GTNHGradle/blob/master/src/main/java/com/gtnewhorizons/gtnhgradle/modules/IdeIntegrationModule.java)
generates run configurations for projects using that module. This does not prove
that every GTNH repository supplies the same runs.

## IntelliJ indexing or generated-source problems

**Signs:** code compiles in Gradle but appears unresolved in the editor, generated
sources are missing, or navigation stops working.

1. Wait for Gradle synchronization before judging indexing results.
2. Confirm the terminal build works with the repository-required JDK.
3. Reload the Gradle project so source sets and generated directories come from
   the build model.
4. Check whether generation is performed by a documented Gradle task.
5. Use IntelliJ cache invalidation only after the project model and Gradle build
   are correct; it cannot fix a broken model.

Do not mark generated directories manually unless the repository documents it;
the next Gradle reload may replace that setting.

## Local and CI disagree

**Signs:** the same commit passes locally and fails on GitHub Actions, or the
reverse.

1. Open the exact workflow run and note the failing job, JDK, operating system,
   command, and arguments.
2. Compare those with your local command and `java -version`.
3. Test the committed diff from a clean checkout; untracked files and warm caches
   can hide missing inputs.
4. Check case-sensitive paths, line endings, executable bits, locale, and tests
   that depend on time or ordering.
5. Reproduce the workflow's documented task, not an assumed equivalent.

Current GTNH mod CI can delegate to shared workflows, as shown by
[ExampleMod's build-and-test workflow](https://github.com/GTNewHorizons/ExampleMod1.7.10/blob/master/.github/workflows/build-and-test.yml).
Follow that reference before deciding what CI actually runs.
