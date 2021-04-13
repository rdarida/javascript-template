<h1 align="center">javascript-template</h1>
<p align="center">Kick off your project with this template</p>
<p align="center">
  <a href="https://sonarcloud.io/dashboard?id=rdarida_javascript-template" target="_blank" alt="Project on SonarCloud">
    <img alt="Quality Gate Status" src="https://sonarcloud.io/api/project_badges/measure?project=rdarida_javascript-template&metric=alert_status" />
  </a>
  
  <a href="https://sonarcloud.io/dashboard?id=rdarida_javascript-template" target="_blank" alt="Project on SonarCloud">
    <img alt="Coverage" src="https://sonarcloud.io/api/project_badges/measure?project=rdarida_javascript-template&metric=coverage" />
  </a>
  
  <img alt="dependencies" src="https://david-dm.org/rdarida/javascript-templat/status.svg" />
  <img alt="devDependenceis" src="https://david-dm.org/rdarida/javascript-templat/dev-status.svg" />
</p>
<hr>

## Project setup
1. Create new GitHub repository from this template.

2. Create new project on [SonarCloud](https://sonarcloud.io/) for the new repository.

3. Create secrets called **`SONAR_TOKEN`**, and **`NPM_TOKEN`** on the repository's settings page.

4. Rename all the occurrance of **"javascript-template"** and **"JavaScript Template"** in the project.

5. Run **`npm install`**.

6. Remove **`package-lock.json`** from **`.gitignore`**.

7. Rename **`Xmain`** to **`main`** in **.github/workflows/release.yml**.

8. Push the modification into your remote repository.


## Available scripts
In the project directory, you can run:

### `clean`
Runs [rimraf](https://www.npmjs.com/package/rimraf) and removes **coverage**, **dist**, **docs** directories, and **test-report.xml** file.

### `lint`
Runs [ESLint](https://eslint.org/) and lints all the **\*.js** files.

### `format`
Runs [Prettier](https://prettier.io/) and formats all the **\*.js**, and **\*.json** files.

### `pretest`
Runs BEFORE **`test`** and removes the **coverage** directory.

### `test`
Runs tests with [Jest](https://jestjs.io/docs/en/getting-started) and collects coverage information.

### `predocs`
Runs BEFORE **`docs`** and removes the **docs** directory.

### `docs`
Runs [JSDoc](https://jsdoc.app/) and generates the documentation into the **docs** directory.

### `prebuild`
Runs BEFORE **`build`** and calls the **`clean`** script.

### `build`
Runs [Babel](https://babeljs.io/) and compiles the source files into the **dist** directory.

### `prerelease`
Runs BEFORE **`release`** and calls the **`build`** script.

### `release`
Runs [standard-version](https://github.com/conventional-changelog/standard-version/) for versioning using [semver](https://semver.org/) and CHANGELOG generation powered by [Conventional Commits](https://conventionalcommits.org).

### `postrelease`
Runs AFTER **`release`**, pushes **standard-version**'s modification into the git repository.

## What's inside?
A quick look at the top-level files and directories.

    .
    ├── .github/workflows/
    ├── .vscode/
    ├── src/
    ├── test/
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── commitlint.config.js
    ├── jest.config.json
    ├── jsdoc.config.json
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── sonar-project.properties

1. **`.github/workflows/`**: This directory contains your [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions) [workflow files](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions).

2. **`.vscode/`**: This directory contains the workspace specific [VSCode settings](https://code.visualstudio.com/docs/getstarted/settings).

3. **`src/`**: This directory contains the source files.

4. **`test/`**: This directory contains the test files.

5. **`.babelrc`**: This is a configuration file for [Babel](https://babeljs.io/docs/en/config-files).

6. **`.editorconfig`**: [EditorConfig](https://editorconfig-specification.readthedocs.io/en/latest/#supported-pairs) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

7. **`.eslintrc.json`**: This is a configuration file for [ESLint](https://eslint.org/). Find and fix problems in your JavaScript code.

8. **`.gitignore`**: This file tells git which files should not track / not maintain a version history for. See more about ignoring files [here](https://help.github.com/articles/ignoring-files/).

9. **`.prettierignore`**: This is a configuration file for [Prettier](https://prettier.io/). It tells the prettier which files should not format.

10. **`.prettier`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

11. **`commitlint.config.js`**: Helps adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy. See more about [here](https://commitlint.js.org).

12. **`jest.config.json`**: This is a configuration file for [Jest](https://jestjs.io/).

13. **`jsdoc.config.json`**: This is a configuration file for [JSDoc](https://jsdoc.app/).

14. **`LICENSE`**: This template is licensed under the MIT license.

15. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project. See more about the manifest file [here](https://docs.npmjs.com/cli/v6/configuring-npm/package-json).

16. **`README.md`**: A text file containing useful reference information about your project.

17. **`sonar-project.properties`**: This is a configuration file for [SonarCloud](https://sonarcloud.io).


## Resources

- [How to Create and Publish Your First Node.js Module](https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738)

- [How to Create a Barebones Poduction Ready NPM Package with Babel 7](https://medium.com/@aleklordhurst/how-to-create-a-barebones-production-ready-npm-package-with-babel-7-f6a0570543d3)

- [JSDoc Style Guide](https://github.com/shri/JSDoc-Style-Guide)

- [Automatically Publish to npm using GitHub Actions](https://sergiodxa.com/articles/github-actions-npm-publish)

- [Automating npm publish with GitHub Actions](https://www.youtube.com/watch?v=exhlcvCs6yw)

- [Making SonarCloud play nicely with Jest](https://medium.com/@daendersby/making-sonarcloud-play-nicely-with-jest-fa271f559024)

- [Excluding in sonar-project.properties file](https://stackoverflow.com/questions/39115582/directory-excluding-in-sonar-project-properties-file-doesnt-work-for-me)

- [Avoid NPM Headaches With Good Practices](https://medium.com/swlh/avoid-npm-headaches-with-good-practices-d2d52ff257f9)

- [7 Repos I Didn’t Know I Needed For Front-End](https://javascript.plainenglish.io/7-repos-i-didnt-know-i-needed-for-front-end-389bf498afaa)
