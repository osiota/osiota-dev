# Development helper for the osiota project

This repository contains helper scripts for the development of [osiota](https://github.com/osiota/osiota).

## Overview

  * [Create App](#create-app) - Create a repository for your osiota based app
  * [Maintanance](#maintanance) - Maintance your app
  * [Migrate App](#migrate-app) - Migrate existing repository


## Create App

Follow the next steps, to create a new osiota app based on the [template repository](https://github.com/osiota/base-repo-osiota-app). Using the template repository simplifies the maintaince of the base files. Most steps were automated by separate scripts located in the [osiota-dev project](https://github.com/osiota/osiota-dev).

### Step 1.a: Create repository from template:

```bash
npx osiota-dev-new-module ../osiota-app-NAME
cd ../osiota-app-NAME
```

<!--
```bash
../osiota-dev/new-module osiota-app-NAME
cd osiota-app-NAME
```

```bash
npm run osiota-dev-new-module ../osiota-app-NAME
```
-->

### Step 2: Integrate:

Create (oder adapt) you [osiota](https://github.com/osiota/osiota) based application.

And run:

```bash
npm install
```

You may as well commit your changes.

### Step 3: Create and edit schema file(s):

Run for each osiota entry script file (here `file.js`)

```bash
npx osiota-dev-create-schema file.js
vim file-schema.json
```

<!--
```bash
../../osiota-dev/create-schema.sh file.js
vim file-schema.json
```
-->

And adapt it and the package file:

```bash
npx osiota-dev-adapt-ps 
```

<!--
```bash
../../osiota-dev/adapt-package-and-schema
```
-->


### Step 4: Generate README file:
```bash
npm run doc
```

<!--
```bash
npx osiota-dev-doc-jsonschema 
```

```bash
../../osiota-dev/doc-jsonschema
```
-->


Don't forget to commit:

```bash
git add package.json schema.json *-schema.json README.md
git commit -m "+package, schema and readme"
```

### Step 5: Push the new repository:

Go to [github](https://github.com) and create a repository. We recommand using the same name as before.

```bash
git remote add origin git@github.com:MYNAME/osiota-app-NAME.git
git push --set-upstream origin master
```

**ALTERNATIVE**: If you are part of the osiota development team, you can use a helper script to create the repository automatically:

```bash
npx osiota-dev-upload-to-github-group
```

### Step 6: Publish to npm:
```bash
npx osiota-dev-publish
```

## Maintanance

### Update generated files:

Update README:

```bash
npm run doc
```

Update package.json

```bash
npx osiota-dev-adapt-ps
```

### Publish a new version:

A small change: `1.2.X`

```bash
npx osiota-dev-publish patch
```

A normal change: `1.X.0`

```bash
npx osiota-dev-publish minor
```

A big step: `X.0.0`

```bash
npx osiota-dev-publish major
```


### Update base repository

To update your repository to the newest version of the [template repository](https://github.com/osiota/base-repo-osiota-app):

```base
npx osiota-dev-merge-base-repo
```

## Migrate App

If you already have a git repository, providing an osiota app, you can migrate the commits with the following commands:

### Step 1.b: Clone and adapt existing repository:

First you need the osiota-dev project:

```bash
git clone https://github.com/osiota/osiota-dev
```

Now clone and adapt an existing repository:

```bash
./osiota-dev/migrate-module git@gitlab.nerdbox.de:energy-router/REPO.git [osiota-app-NEWNAME]
cd osiota-app-NEWNAME
```

Follow step 2 and following of section [Create app](#create-app).



## License

This software is released under the MIT license.

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
