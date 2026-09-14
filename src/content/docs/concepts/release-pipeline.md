---
title: Understand the GTNH release pipeline
description: Trace a merged mod change through tagging, publication, manifests, and pack builds.
sidebar:
  order: 3
---

A merged mod pull request and a downloadable GTNH build are different states.
Use the repositories and workflow runs at each boundary to determine what is
actually available.

## Follow the artifacts

1. A change is merged into the owning repository.
2. A version tag selects a commit. Some repositories are handled by coordinated
   tagging automation; others require an authorized maintainer to tag them.
3. Repositories with the current
   [release-tags workflow](https://github.com/GTNewHorizons/GTNH-Actions-Workflows/blob/master/templates/release-tags.yml)
   start a release build when the tag is pushed.
4. The shared
   [release workflow](https://github.com/GTNewHorizons/GTNH-Actions-Workflows/blob/master/.github/workflows/release-tags.yml)
   builds release artifacts and can publish them to GitHub Releases and other
   configured destinations.
5. DreamAssemblerXXL manifests select mod versions for an assembled build.
6. The daily workflow assembles and publishes downloadable output in
   [GTNH Daily Builds](https://github.com/GTNewHorizons/GTNH-Daily-Builds/releases).

## Read a pack version

In version `2.9.0`, each position has a different meaning:

- `2` is the run generation. When this number changes, start a new playthrough.
- `9` is the major release number. Major releases contain substantial changes.
  The current expected pace is about one per year, but this is not a guarantee.
- `0` is the maintenance release number. These releases primarily contain fixes,
  but may also include features or other non-bug changes.

After `2.9.0`, maintenance releases are numbered `2.9.1`, `2.9.2`, and so on.

## Follow a major release lifecycle

A major release normally progresses through beta versions, release candidates,
and then a stable version:

`2.9.0-beta-1` → `2.9.0-beta-2` → `2.9.0-rc-1` → `2.9.0`

There may be several beta rounds while changes and migration problems are
resolved. Once a beta is considered release-ready, it becomes a release
candidate. Ideally only one release candidate is needed. Another can be
published if testing finds a release blocker.

The current naming history is visible in the
[modpack releases](https://github.com/GTNewHorizons/GT-New-Horizons-Modpack/releases).

## Verify each boundary

For a change expected in a daily build, record:

- the merged commit and target branch;
- the tag that contains that commit;
- the corresponding release workflow result;
- the version selected by the current DreamAssemblerXXL manifest; and
- the daily build run and release.

A green mod CI run proves that commit passed those checks. It does not prove a
tag exists, the release published successfully, or DreamAssembler selected that
version.

Authorized maintainers can continue with
[Perform release operations](/gtnh-developer-handbook/maintainers/release-operations/) or
[Run a daily build manually](/gtnh-developer-handbook/maintainers/run-daily-build/).
