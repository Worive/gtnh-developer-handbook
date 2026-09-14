---
title: Run an experimental modpack build
description: Start and verify the DreamAssemblerXXL experimental build workflow.
sidebar:
  order: 2
---

:::caution[Maintainer operation]
The experimental workflow publishes build artifacts and commits its generated
manifest, asset data, and changelog to DreamAssemblerXXL's `master` branch. Run
it only when authorized and when a new experimental build is intended.
:::

1. Open the
   [DreamAssemblerXXL Actions page](https://github.com/GTNewHorizons/DreamAssemblerXXL/actions).
2. Select **Experimental modpack build**.
3. Select **Run workflow**, choose `master`, and confirm the run.
4. Open the queued run and monitor its build, pack-test, and upload jobs.

The current workflow generates the experimental manifest from the latest
available mod versions, assembles Java 8 and modern-Java client/server packages,
runs the shared modpack tests, uploads artifacts, and commits the generated
metadata back to `master`.

After success, verify the uploaded packages and the workflow's generated commit.
If a job fails, preserve the first failed job's log and check whether publication
or the final commit partially completed before rerunning. The
[workflow file](https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/.github/workflows/experimental-modpack-build.yml)
is authoritative.
