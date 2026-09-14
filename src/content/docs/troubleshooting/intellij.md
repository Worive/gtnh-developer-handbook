---
title: IntelliJ problems
description: Diagnose indexing, generated-source, and Gradle-model problems.
sidebar:
  order: 4
---

**Signs:** code compiles in Gradle but appears unresolved in the editor,
generated sources are missing, or navigation stops working.

1. Wait for Gradle synchronization before judging indexing results.
2. Confirm the terminal build works with the repository-required JDK.
3. Reload the Gradle project so source sets and generated directories come from
   the build model.
4. Check whether generation is performed by a documented Gradle task.
5. Use IntelliJ cache invalidation only after the model and Gradle build are
   correct; it cannot fix a broken model.

For older repositories that expose `setupDecompWorkspace`, the
[Development wiki](https://wiki.gtnewhorizons.com/wiki/Development#Common_Issues)
suggests deleting the generated `build` directory, running
`./gradlew setupDecompWorkspace`, and reloading Gradle. Do this only when that
task exists.
