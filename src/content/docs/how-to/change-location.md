---
title: Find where a change belongs
description: Trace a requested change to the repository and source that own it.
sidebar:
  order: 1
---

## Start from evidence

Collect the smallest reproducible example: the visible name, log message,
configuration key, class name, or stack-trace frame. Search that exact text in
GitHub and in your checkout before searching broad concepts.

The [GTNewHorizons organization](https://github.com/GTNewHorizons) contains the
modpack, individual mods, libraries, build tooling, and infrastructure. A pack
issue may therefore require a change in a mod repository, while a dependency or
build failure may belong to [GTNHGradle](https://github.com/GTNewHorizons/GTNHGradle),
[RetroFuturaGradle](https://github.com/GTNewHorizons/RetroFuturaGradle), or a
shared workflow.

## Narrow the location

1. Search the exact user-visible string or error text.
2. Find the code that constructs or consumes it.
3. Follow imports and calls outward until you reach the behavior to change.
4. Check `dependencies.gradle`, `repositories.gradle`, and settings files when
   the implementation comes from another repository.
5. Use blame and recent pull requests to understand why the code is present;
   do not treat age alone as evidence that it is wrong.
6. Confirm that the repository is active and read its README, issue templates,
   and contribution files.

:::tip[Keep the first pull request narrow]
If the fix needs coordinated changes in two repositories, describe that
dependency explicitly. Do not bundle drive-by cleanup from either repository.
:::

## Know when you are done searching

You should be able to name:

- the repository that owns the behavior;
- the source or configuration file involved;
- the task that verifies the change; and
- an issue, code path, or maintainer confirmation supporting that choice.

If not, bring those partial findings to the
[official GTNH Discord](https://discord.gg/EXshrPV) or the relevant issue. For build
behavior, [inspect Gradle tasks](/gtnh-developer-handbook/how-to/gradle-tasks/) before assuming the task name.
