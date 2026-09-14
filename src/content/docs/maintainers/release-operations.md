---
title: Release operations
description: Decide between automatic and manual mod releases, tag safely, and verify publication.
sidebar:
  order: 3
---

:::caution[Maintainer operation]
Pushing a tag can publish releases and Maven artifacts consumed by other mods
and DreamAssembler. Continue only when you are authorized for the target
repository and release.
:::

## Decide whether the tag is automatic

Do not manually tag a merge merely because the branch has moved. Some GTNH mod
repositories are processed by an end-of-day MergeMasterXXL operation, while
others are tagged manually.

The public
[MergeMasterXXL tagging implementation](https://github.com/GTNewHorizons/MergeMasterXXL/blob/master/src/tag_dev.ts)
derives its normal repository set from the current DreamAssemblerXXL
experimental manifest. It skips a branch already pointing at an exact tag,
orders inter-repository dependencies, and creates `-pre` tags for its development
branches. Its
[tag helper](https://github.com/GTNewHorizons/MergeMasterXXL/blob/master/src/requests/tags.ts)
increments the last numeric part of the recent tag format.

The production schedule and complete current exception list are not declared in
that public repository. Before tagging manually:

1. Check the target repository's recent tags, releases, and Actions runs.
2. Check whether the target commit is already tagged.
3. Confirm with the current release coordinator whether automation is expected
   to handle this repository.

The presence of `.github/workflows/release-tags.yml` only proves what happens
after a tag is pushed; it does not prove who or what should create the tag.

## Choose and verify the tag

Use the repository's existing tag pattern. Do not infer a universal GTNH version
scheme or reuse the next version from another mod.

```console
git fetch origin --tags
git show --no-patch --oneline TARGET-COMMIT
git tag --points-at TARGET-COMMIT
```

**Expected result:** the first command refreshes remote branches and tags, the
second identifies the intended commit, and the third shows whether that commit
already has a tag.

Use a tag ending in `-pre` only when the repository's established process calls
for a pre-release build. The shared release workflow detects that suffix and
does not publish the build to Modrinth or CurseForge. It intentionally does not
mark the GitHub release as a prerelease because that currently breaks
DreamAssemblerXXL. A `-pre` tag must therefore not be treated as private.

## Push a manual tag

After another maintainer check or the repository's required approval:

```console
git tag TAG TARGET-COMMIT
git push --dry-run origin refs/tags/TAG
git push origin refs/tags/TAG
```

**Expected result:** the dry run reports the new tag without changing the
remote. The final command pushes it once. If the tag already exists or the
target is wrong, stop; do not force-move a published tag.

## Verify publication

If the repository contains the standard tag workflow, open its Actions page and
follow **Release tagged build**. Then verify the GitHub release and every
publishing destination required by that repository. A release step may fail
independently, so the existence of a tag is not proof that all artifacts were
published.

Finally, confirm the intended version appears in the relevant DreamAssemblerXXL
manifest before expecting it in an assembled modpack build.
