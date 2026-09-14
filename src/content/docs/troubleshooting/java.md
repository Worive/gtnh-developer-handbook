---
title: Java problems
description: Diagnose JDK, toolchain, and class-file version failures.
sidebar:
  order: 1
---

**Signs:** Gradle refuses to start, reports an unsupported class-file version,
cannot find a toolchain, or IntelliJ and the terminal behave differently.

1. Read `.java-version`, `gradle.properties`, build scripts, and CI workflow in
   the current checkout.
2. Run `java -version` in the same terminal that starts Gradle.
3. Check the Gradle JVM selected in IntelliJ separately; it can differ from your
   shell.
4. Point both environments at the repository-required JDK, then reload Gradle.

Do not apply one JDK number to all GTNH repositories. Follow the exact
repository's checked-in configuration.
