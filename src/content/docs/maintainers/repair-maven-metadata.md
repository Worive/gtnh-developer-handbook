---
title: Repair Maven repository metadata
description: Rebuild a damaged maven-metadata.xml for a scoped GTNH Nexus path.
sidebar:
  order: 4
---

:::caution[Privileged recovery operation]
This procedure changes metadata in the GTNH Nexus repository. Continue only
with Nexus administration access, a confirmed damaged `maven-metadata.xml`, and
the exact affected repository path.
:::

Nexus provides a **Repair - Rebuild Maven repository metadata
(maven-metadata.xml)** task. It rebuilds Maven metadata for a selected portion
of a hosted repository and validates its checksums.

## Use an existing repair task

Three manual tasks already cover the known GTNH convention artifacts:

- `gtnhgradle`
- `gtnhconvention`
- `gtnhsettingsconvention`

Use the matching existing task when its configured scope exactly covers the
damaged path. Review its repository and filters before running it; do not widen
the scope just to make the task reusable.

## Create a missing scoped task

1. In Nexus, open **Settings → Tasks** and select **Create task**.
2. Choose **Repair - Rebuild Maven repository metadata
   (maven-metadata.xml)**.
3. Give the task a specific name, select the affected hosted Maven repository,
   and fill in the group/artifact scope for only the damaged portion.
4. Set the schedule to **Manual** and save the task.
5. Recheck the scope, run it once, and monitor its task log.
6. Fetch the affected `maven-metadata.xml` and verify its versions and checksum
   before declaring the incident resolved.

Keep repair tasks manual. If corruption recurs, investigate the publishing or
storage cause instead of scheduling metadata rebuilds as routine maintenance.
See Sonatype's
[task reference](https://help.sonatype.com/en/tasks.html#types-of-tasks)
for the current task behavior and log locations.
