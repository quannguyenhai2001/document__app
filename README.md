# Guideline

## Install recommend extensions

1. Linting

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Formatting

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## How to fix errors

### Linting error

If that error cannot be fixed automatically with eslint package, please check ESLint [rules](https://eslint.org/docs/rules/) to fix this manually.

### Commit message error

If you have output similar with below

```bash
⧗   input: example
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```

This error causes by [CommitLint](https://github.com/conventional-changelog/commitlint/). See below rules to fix this.

#### Commit message structure

type(scope?): subject

#### Scope value

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
- chore: add something without touching production code (Eg: update npm dependencies)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- revert: Reverts a previous commit
- style: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

### Example

```bash
git commit -m "Update login screen" # Bad commit message ⚠️
git commit -m "feat: Update login screen" # Violated commit message ⚠️ (subject must not be sentence-case, start-case, pascal-case, upper-case)
git commit -m "feat: update login screen" # Good commit message ✅
```
