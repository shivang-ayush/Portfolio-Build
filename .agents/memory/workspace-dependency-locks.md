---
name: Workspace dependency locks
description: Updating the shared pnpm lockfile when changing dependencies in one workspace package.
---

After editing dependencies for a single package in this pnpm workspace, regenerate the shared lockfile from the workspace root rather than hand-editing the package importer block.

**Why:** A workspace package has one importer inside the shared lockfile; manual edits are easy to get subtly wrong and can leave frozen installs inconsistent.

**How to apply:** After changing a workspace package’s `package.json`, run `pnpm install --lockfile-only --ignore-scripts` from the workspace root, then build the affected package.