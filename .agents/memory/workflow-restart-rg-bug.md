---
name: Workflow restart ripgrep failure workaround
description: What to do when WorkflowsRestart/restartWorkflow fails with "Ripgrep exited with code 2" about missing .local/skills paths
---

Symptom: `WorkflowsRestart` and the `restartWorkflow`/`listWorkflows` callbacks fail with `Ripgrep exited with code 2: rg: ./.local/skills/<name>: No such file or directory`, and the dev server stays down.

**Why:** Platform-side stale state — the referenced skill dirs don't exist anywhere in the workspace; creating placeholder dirs does NOT fix it. Retrying the restart tool just reproduces the error.

**How to apply:** Don't loop on restarts. Background processes started via ShellExec (`nohup`/`setsid`) die when the shell exits. Working fallback: start the server from CodeExecution inside a `"use impure"` function with `spawn(..., { detached: true, stdio: "ignore" })` + `unref()` — it survives, port 5000 answers, and Screenshot works. Tell the user the managed workflow is stuck platform-side if it persists.
