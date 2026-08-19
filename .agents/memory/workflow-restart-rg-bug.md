---
name: Workflow restart ripgrep failure workaround
description: What to do when WorkflowsRestart/restartWorkflow fails with "Ripgrep exited with code 2" about missing .local/skills paths
---

Symptom: `WorkflowsRestart` and the `restartWorkflow`/`listWorkflows` callbacks fail with `Ripgrep exited with code 2: rg: ./.local/skills/<name>: No such file or directory`, and the dev server stays down.

**Why:** Platform-side stale state — the referenced skill dirs don't exist anywhere in the workspace; creating placeholder dirs does NOT fix it (tried both in `workspace/.local/skills` and in the `/mnt/*/working_subv/.local/skills` mount — the failing rg runs in a scope not reachable from the shell). `configureWorkflow` can fail with the same error. In the observed incident, the platform state later cleared on its own and a normal managed restart succeeded.

**How to apply:** Don't loop on immediate restarts. After some time or a workspace reload, retry the managed restart once because the stale state may have cleared. Background processes started via ShellExec (`nohup`/`setsid`) die when the shell exits. Temporary fallback: start the server from CodeExecution inside a `"use impure"` function with `spawn(..., { detached: true, stdio: "ignore" })` + `unref()`. Tell the user the managed workflow is stuck platform-side if it persists.
