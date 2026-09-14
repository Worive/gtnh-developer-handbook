---
title: Mixins and transformers
description: Enable focused diagnostics for failed mixins and transformed classes.
sidebar:
  order: 6
---

Add diagnostic flags only to a local development run and remove them after
capturing the failure:

- `-Dmixin.debug=true` enables Mixin diagnostics.
- `-Dmixin.debug.verbose=true` raises verbose Mixin messages to the visible log.
- `-Dmixin.debug.export=true` exports classes after mixins are applied.
- `-Dmixin.debug.countInjections=true` turns an unexpected injection count into
  an error.
- `-Dfml.debugAccessTransformer=true` logs access-transformer application.
- `-Dlegacy.debugClassLoading=true` enables legacy class-loading diagnostics.

Start with the one flag matching the symptom; broad class dumps can be large.
See the [Development wiki's JVM flag reference](https://wiki.gtnewhorizons.com/wiki/Development#JVM_flags)
for advanced flags and their code references.
