---
title: Gradle problems
description: Diagnose Gradle import, wrapper, and dependency-resolution failures.
sidebar:
  order: 2
---

**Signs:** IntelliJ cannot load the Gradle model, artifacts time out, or tasks
cannot be listed.

1. Confirm you opened the repository root and selected the checked-in wrapper.
2. Run the wrapper's `tasks --all` command in a terminal. This separates an IDE
   problem from a build problem.
3. Read the first failed repository URL or dependency coordinate. Check network,
   proxy, certificate, and credential errors without deleting all caches first.
4. Compare repository and dependency declarations with the current checkout.
5. Retry after a transient service failure; delete caches only when the error
   identifies a corrupt artifact.

Capture evidence with [Locate logs](/gtnh-developer-handbook/how-to/locate-logs/).
