---
title: Contribute to this handbook
description: Decide what belongs in the GTNH Developer Handbook and submit a focused documentation change.
sidebar:
  order: 5
---

This handbook records GTNH development knowledge and shared decisions.

## Decide whether the topic belongs here

A topic needs a clear GTNH development purpose. Check:

- Is it useful to developers working on GTNH repositories?
- Is it shared across repositories, or likely to help contributors beyond one
  mod?
- Does it describe a GTNH convention, agreed practice, workflow, or recurring
  pitfall?
- Does it explain how relevant Minecraft 1.7.10 or Forge knowledge applies to
  GTNH development?
- Is it stable enough that maintaining the page is practical?

For example, document which shared color utility preserves resource-pack
compatibility, when to use it, why, and where to verify its current API.

## Choose where it belongs

Choose the section from the reader's goal:

| Section | Use it for |
| --- | --- |
| **Start Here** | The ordered path a new contributor follows to prepare a development environment and make a first change. |
| **Contributing** | Contribution policies, review expectations, testing expectations, and guidance for improving this handbook. |
| **Development Practices** | Shared GTNH conventions, preferred APIs, style decisions, and compatibility practices. |
| **Minecraft & Forge Internals** | Minecraft 1.7.10 and Forge mechanisms explained through their relevance to GTNH development. |
| **How-to Guides** | Steps for completing a specific development task with a clear outcome. |
| **Concepts** | Explanations of GTNH repository structure, build tooling, dependencies, and release systems. |
| **Maintainer Procedures** | Release, build, and recovery operations performed by GTNH maintainers. |
| **Troubleshooting** | Diagnosing a symptom, finding its cause, and recovering from it. |
| **Reference** | Information readers look up, such as terminology, repositories, and authoritative resources. |

For overlapping topics, put shared choices in **Development Practices**,
platform mechanisms in **Minecraft & Forge Internals**, and procedures in
**How-to Guides**. Link instead of duplicating explanations.

## Keep these topics elsewhere

- Put player guides and gameplay information on the
  [official GTNH wiki](https://wiki.gtnewhorizons.com/).
- Include Minecraft 1.7.10 or Forge material only when it explains its relevance
  and application to GTNH development.
- Keep documentation of an individual mod's implementation with that mod,
  close to the source it describes.

A walkthrough of `RenderForgeOfGods` would duplicate one mod's source and become
outdated. Document any reusable convention it demonstrates and link the class
as an example.

Link repository-dependent claims to the relevant source, build script, or
documentation. Do not copy implementation details that can change separately.

## Write a useful page

- Start with the task, decision, or convention the reader needs to understand.
- State the useful conclusion before its background.
- Keep only sentences that define, instruct, explain a reason, or provide
  evidence.
- Explain which repositories or situations it applies to.
- Include the reason behind an agreed practice so readers know when it matters.
- Prefer short procedures and concrete examples over broad introductions.
- Link to current source material for details that may change.
- Use the same concise, task-oriented style as the existing pages.

## Submit the change

Use **Edit page**, or edit `src/content/docs/` locally. Register new pages in
`astro.config.mjs`.

Before opening a pull request, run:

```sh
npm install
npm run build
```

Keep the pull request focused and explain what problem the new or updated
content solves for GTNH developers.
