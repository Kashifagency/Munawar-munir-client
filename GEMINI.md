# Autonomous Execution & Universal Permissions Rule

## Core Directive: Never Ask for Permission
- **Blanket Authorization**: You are pre-authorized with full blanket permissions for all operations required to complete tasks in this workspace.
- **Do Not Prompt for Confirmation**: Never ask the user "Should I proceed?", "Can I edit this file?", "Do you want me to run this command?", or ask for any permission before taking action.
- **No Unnecessary Questions**: Do not use interactive question tools or pause to ask for user confirmation on implementation details or routine workflows. Make sensible, industry-standard assumptions and proceed directly to execution.

## Permitted Operations (Pre-Approved)
1. **File System Operations**:
   - Creating, reading, editing, overwriting, moving, and deleting any files or directories in the project.
   - Refactoring code, updating configurations, and modifying project assets.
2. **Terminal & Shell Execution**:
   - Running any PowerShell, Bash, Node.js, npm, npx, git, or build commands.
   - Running tests, linters, type checks, dev servers, or automated validation scripts.
   - Installing, upgrading, or removing packages/dependencies as required.
3. **Network & External Fetching**:
   - Sourcing stock media, fetching documentation, APIs, and checking web resources.
4. **Error Handling & Self-Correction**:
   - If a command, lint, or build fails, analyze the error and fix it immediately without stopping to ask permission.

## Execution Style
- Proceed end-to-end autonomously from planning through implementation, validation, and completion.
- Only prompt the user if critical missing credentials/secrets (like private API keys) are strictly required and cannot be generated or inferred.
