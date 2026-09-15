---
title: Prerequisites
description: Install the basic tools needed to work on a GTNH repository.
sidebar:
  order: 1
---

## Install only the basics

Install:

- Git and a GitHub account.
- A JDK matching the selected repository.
- IntelliJ IDEA with Gradle support.
- Enough free disk space for source, Gradle caches, and a development instance.

Check what your shell will actually use:

```console
git --version
java -version
```

**Expected result:** both commands print versions. Check the required Java
version after choosing a repository. If Java cannot run, see
[Troubleshoot Java](/gtnh-developer-handbook/troubleshooting/java/).

## Before you continue

[Choose the repository](/gtnh-developer-handbook/start-here/choose-a-repository/)
that owns the change.
