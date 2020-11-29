![Dependencies](https://david-dm.org/rdarida/project-template/status.svg) ![Development Dependencies](https://david-dm.org/rdarida/project-template/dev-status.svg)

# Project Template
Kick off your project with this template.

## Project setup
1. Rename all the occurrance of **"project-template"** and **"Project Template"** in the project.

2. Remove **`package-lock.json`** from **`.gitignore`**.

3. Run **`npm install`**.

## Available scripts
In the project directory, you can run:

### `release`
Runs [standard-version](https://github.com/conventional-changelog/standard-version/) for versioning using [semver](https://semver.org/) and CHANGELOG generation powered by [Conventional Commits](https://conventionalcommits.org).

### `postrelease`
Runs AFTER `release`, pushes **standard-version**'s modification into the git repository.

## What's inside?
A quick look at the top-level files and directories.

    .
    ├── .vscode/
    ├── .editorconfig
    ├── .gitignore
    ├── commitlint.config.js
    ├── LICENSE
    ├── package.json
    └── README.md

1. **`.vscode/`**: This directory contains the workspace specific [VSCode settings](https://code.visualstudio.com/docs/getstarted/settings).

2. **`.editorconfig`**: [EditorConfig](https://editorconfig-specification.readthedocs.io/en/latest/#supported-pairs) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

3. **`.gitignore`**: This file tells git which files should not track / not maintain a version history for. See more about ignoring files [here](https://help.github.com/articles/ignoring-files/).

4. **`commitlint.config.js`**: Helps adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy. See more about [here](https://commitlint.js.org).

5. **`LICENSE`**: This template is licensed under the MIT license.

6. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project. See more about the manifest file [here](https://docs.npmjs.com/cli/v6/configuring-npm/package-json).

7. **`README.md`**: A text file containing useful reference information about your project.
