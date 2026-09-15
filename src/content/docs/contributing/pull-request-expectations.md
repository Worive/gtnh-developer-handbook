---
title: Pull request expectations
description: Prepare a focused GTNH pull request with reviewable evidence.
sidebar:
  order: 3
---

- Keep one feature or coherent change in each pull request. Use separate linked
  pull requests for dependent changes.
- Explain what changes, why it changes, and which part of the pack it affects.
- Write the title with changelog readers in mind.
- Link the issue, prior discussion, and dependent pull requests.
- Add screenshots or video when behavior is visual.
- Include a flowchart when required for a new recipe chain.
- State exactly how the change was tested.
- Target the branch named by the repository's current contribution instructions.

Exclude unrelated cleanup because it complicates review and rollback.

Maintainers may include a pull request temporarily in a development build. The
author remains responsible for problems found there.
