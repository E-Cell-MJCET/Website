# Contributing Guidelines

## 1. Branching Strategy
Start from dev branch: When starting any work, always create your branch from the dev branch.
Branch naming convention:
For new features: feat/featurename
For bug fixes: fix/whatyouarefixing
For documentation updates: docs/whatyouupdated
For refactoring code: refactor/whatyourefactored
For urgent hotfixes: hotfix/urgentfix

## 2. Pull Request (PR) Workflow
### Step 1: Development
After completing your task, push your changes and create a PR to merge your branch into the dev branch.
Provide a clear description of the changes in the PR.
### Step 2: Testing
Once all changes are merged into the dev branch by all contributors, a PR should be created from dev to the test branch.
Ensure the code is properly tested.
At least 2 members must review and approve the PR before merging into the test branch.
### Step 3: Production
After successful testing, create a PR from the test branch to the main branch.
This PR must be approved by the CTO and at least 1 other member.
Once approved, the changes will be deployed to production.
## 3. Commit Message Guidelines
Use the following prefixes for clear and consistent commit messages:

```
feat: for new features.
fix: for bug fixes.
docs: for documentation updates.
refactor: for code refactoring.
style: for formatting and style changes (not affecting code logic).
test: for adding or updating tests.
chore: for maintenance tasks.
```
```
Example: feat: add user authentication to login page.
```
## 4. CI/CD Pipeline Requirements
The CI/CD pipeline must run error-free.
Both ESLint checks and Next.js build must pass successfully for the PR to be valid.
## 5. Conflict Resolution
If any merge conflicts arise, contributors should immediately contact the CTO for resolution.
## 6. PR Review Time
All PRs should be reviewed and resolved within 5 days of submission.
## 7. Emergency Procedure
In case of critical hotfixes or urgent issues, the CTO must trigger the emergency procedure.
The PR can then be approved by the CTO alone, bypassing the usual workflow.
