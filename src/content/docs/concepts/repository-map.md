---
title: Map a change to the GTNH repositories
description: Understand the main repository roles before choosing where to work.
sidebar:
  order: 1
---

GTNH is an organization of mods, pack data, build tooling, automation, and
supporting projects. A player-visible change can cross several of those layers.

## Identify the owning artifact

| Change concerns | Start with |
| --- | --- |
| Java or Scala behavior inside a mod | That mod's repository in the [GTNewHorizons organization](https://github.com/GTNewHorizons) |
| Pack configuration, packaged resources, or pack-level data | [GT-New-Horizons-Modpack](https://github.com/GTNewHorizons/GT-New-Horizons-Modpack) |
| Pack manifests and assembled downloads | [DreamAssemblerXXL](https://github.com/GTNewHorizons/DreamAssemblerXXL) |
| Shared GTNH Gradle conventions | [GTNHGradle](https://github.com/GTNewHorizons/GTNHGradle) |
| Legacy Minecraft build mechanics | [RetroFuturaGradle](https://github.com/GTNewHorizons/RetroFuturaGradle) |
| Translation work | [GTNH-Translations](https://github.com/GTNewHorizons/GTNH-Translations) |
| Repeatable in-game integration tests | [Horizon-QA](https://github.com/GTNewHorizons/Horizon-QA) |

This table provides starting points, not ownership policy. Confirm the result
from current source, issues, dependency declarations, and maintainers.

## Separate ownership from support

A repository living in the organization does not by itself describe the kind of
support it receives. Consult the officially linked
[mod support spreadsheet](https://docs.google.com/spreadsheets/d/1LHd8c4FLLHiJqsuTppF2XFTE6bh-mXE7afVwGbzOKms)
and its current legend.

When a change crosses repositories, identify the dependency order and link every
required pull request. Do not assume merging one repository immediately updates
the assembled pack; follow the
[release pipeline](/gtnh-developer-handbook/concepts/release-pipeline/).
