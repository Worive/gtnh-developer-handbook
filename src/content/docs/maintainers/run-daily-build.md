---
title: Run a daily modpack build manually
description: Start and monitor the current GTNH daily build workflow.
sidebar:
  order: 1
---

The current
[Daily modpack build workflow](https://github.com/GTNewHorizons/DreamAssemblerXXL/actions/workflows/daily-modpack-build.yml)
in DreamAssemblerXXL supports manual runs. Its
[workflow file](https://github.com/GTNewHorizons/DreamAssemblerXXL/blob/master/.github/workflows/daily-modpack-build.yml)
is the authoritative source for its trigger, branch, and behavior.

## Start the build

:::caution[Maintainer operation]
This workflow can publish a daily release and update repository data. Run it
only when you are authorized and a manual build is needed.
:::

1. Open the [DreamAssemblerXXL Actions page](https://github.com/GTNewHorizons/DreamAssemblerXXL/actions).
2. Select **Daily modpack build** in the left sidebar.
3. Select **Run workflow** above the workflow-run list.
4. Choose the **master** branch.
5. Select the green **Run workflow** button.

**Expected result:** a new run appears near the top of the list, initially
queued or in progress.

GitHub requires repository write access to run a workflow manually. If the
button is missing, check the
[GitHub manual-run requirements](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow?tool=webui)
and ask a DreamAssemblerXXL maintainer rather than trying to work around the
restriction.

## Monitor the run

Open the new run and follow its jobs. After a successful run, the build artifacts
are published as a release in
[GTNH Daily Builds](https://github.com/GTNewHorizons/GTNH-Daily-Builds/releases).

If it fails, open the first failed job and preserve its log link before asking
for help. Check whether another daily build was already running before
restarting: the workflow is configured to cancel an in-progress run when a new
run starts.

To understand which mod releases feed the build, see
[How changes reach a modpack build](/gtnh-developer-handbook/concepts/release-pipeline/).
