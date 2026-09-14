---
title: Locate logs and useful errors
description: Capture the first actionable failure from Gradle, IntelliJ, or a development client.
sidebar:
  order: 3
---

## Start where the failure occurred

### Gradle

Read upward from the final `BUILD FAILED` line to the first failing task and its
first `Caused by` section. Rerun that same, known task with `--stacktrace` when
the normal output hides the origin. Use `--info` only if dependency resolution
or task selection remains unclear.

Capture:

- the command and working directory;
- the first failing task;
- the first meaningful exception and nested cause;
- the JDK and Gradle versions printed by the build; and
- the relevant repository commit.

### Development client or server

Keep the terminal or IntelliJ Run output. Follow any absolute log or crash-report
path printed there. In the run working directory, look for a `logs` directory and
a `crash-reports` directory rather than assuming they are at the repository root.

`latest.log` is useful for the full startup sequence. A timestamped crash report
usually gives a shorter exception-focused view. Include the earliest relevant
stack trace, not only the last line.

### IntelliJ IDEA

Separate an IDE-model failure from a code failure:

- Gradle synchronization errors appear in the Build or Sync output.
- Compiler errors appear under the task or IDE build that produced them.
- IDE internal failures belong in IntelliJ's own log, available through its Help
  menu; JetBrains documents the current location in
  [Locating IDE log files](https://www.jetbrains.com/help/idea/locating-ide-log-file.html).

## Share a useful report

Redact access tokens, usernames in paths if desired, server addresses, and any
private repository URLs. Do not remove task names, dependency coordinates,
exception types, or the lines immediately around the first cause.

Paste short excerpts in the issue and attach or link long logs. Follow the
target repository's issue template. The organization also provides a central
[GTNH issue tracker](https://github.com/GTNewHorizons/GT-New-Horizons-Modpack/issues),
but a confirmed repository-specific bug should be reported where its maintainers
request.

Next: diagnose a [development client startup failure](/gtnh-developer-handbook/troubleshooting/common-problems/#development-client-does-not-start)
or a [local/CI mismatch](/gtnh-developer-handbook/troubleshooting/common-problems/#local-and-ci-disagree).
