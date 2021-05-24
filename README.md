# GTR Suite Base Project Front

Ce projet sert de base pour tous les projets GTR Suite en Vue.js.

- [GTR Suite Base Project Front](#gtr-suite-base-project-front)
  - [Getting Started](#getting-started)
  - [Project Configuration](#project-configuration)
    - [Redefine remote links](#redefine-remote-links)
    - [Create first initial commit](#create-first-initial-commit)
    - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Customize configuration](#customize-configuration)
  - [Adding Vuetify](#adding-vuetify)
  - [Traductions](#traductions)
  - [Lint & Formatage](#lint--formatage)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Format files and styles](#format-files-and-styles)
  - [Tests](#tests)
    - [Run your unit tests](#run-your-unit-tests)
    - [Run your end-to-end tests](#run-your-end-to-end-tests)

## Getting Started

Please make sure you have followed the [Environment](https://doc.gtrsuite.com/#/pages/development/environment) and [Github Configuration](https://doc.gtrsuite.com/#/pages/development/github) sections of the [GTRSuite documentation](https://doc.gtrsuite.com/) before continuing.

## Project Configuration

Retrieve this project as a base for development.

```bash
git clone git@github.com:Gatoreviews/base-project-front.git <project-name>
```

### Redefine remote links

In order to link this initial project to yours, you must redefine the remote links to your project.

```bash
rm -rf .git
git init
git remote add origin git@github.com:Gatoreviews/<project-name>.git
```

Check the remote links.

```bash
git remote -v
origin  git@github.com:Gatoreviews/<project-name>.git (fetch)
origin  git@github.com:Gatoreviews/<project-name>.git (push)
```

### Create first initial commit

Create your first commit.

```bash
git add .
git commit -m "initial commit"
git push origin master
```

### Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Adding Vuetify

Add Vuetify using the CLI.

```bash
vue add vuetify
```

Full documentation available [here](https://vuetifyjs.com/en/getting-started/installation/)

## Traductions

To check for missing or unused translations, please use this command:

```bash
yarn translations
```

## Lint & Formatage

### Lints and fixes files

```
yarn lint
```

### Format files and styles

```
yarn format
```

## Tests

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```
