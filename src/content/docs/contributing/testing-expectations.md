---
title: Testing expectations
description: Match GTNH test evidence to the risk and integration surface of a change.
sidebar:
  order: 4
---

Understand the changed class or method before deciding what to test. At minimum,
run the repository's relevant build checks and exercise the changed behavior in
its development environment.

Test in a current full development pack when the change can interact with other
mods, pack configuration, recipes, world data, or startup order. For coordinated
repository changes, test the exact artifact versions together with
[Maven Local](/gtnh-developer-handbook/how-to/test-cross-repository-changes/) or
an online pre-release that CI can resolve.

Report commands, environment, tested behavior, and result in the pull request.
Screenshots complement behavioral tests; they do not replace them.
