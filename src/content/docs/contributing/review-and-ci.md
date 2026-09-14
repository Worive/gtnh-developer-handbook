---
title: Review and CI
description: Respond to review, CI failures, and temporary development-pack testing.
sidebar:
  order: 5
---

Address review comments in the same focused branch and resolve merge conflicts
without discarding upstream changes. When CI fails, open the first failed job,
follow any referenced shared workflow, and reproduce its exact command when
practical.

Maintainers may temporarily include a pull request in a development build for
broader testing. This is case-by-case, not a guaranteed stage of every review.
The original author is expected to investigate problems found during that
testing.

A green check proves only that the recorded workflow passed. It does not prove
that a release was tagged, published, or selected by the modpack.
