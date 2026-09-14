---
title: Use local Gradle overrides
description: Customize a supported GTNH Gradle project without changing shared build files.
sidebar:
  order: 3
---

First run `./gradlew propertiesHelp` when the project provides it. Prefer a
documented property over editing build logic.

Some current GTNHGradle projects support ignored `addon.local.gradle` and
`addon.late.local.gradle` files for machine-specific configuration. Confirm the
mechanism in the repository or its
[ExampleMod advanced guidance](https://github.com/GTNewHorizons/ExampleMod1.7.10#advanced)
before using it.

Keep personal run arguments and environment-specific paths out of committed
build files. If the override should apply to every contributor or CI, it is not
local configuration: propose the normal build-file change and explain why.
