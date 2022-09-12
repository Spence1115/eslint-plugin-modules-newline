# eslint-plugin-modules-newlines

Eslint plugin to enforce placing import and export variables on separate lines

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```
or 
```
$ yarn add eslint --dev
```

Next, install `@spence1115/eslint-plugin-modules-newlines`:

```
$ npm install @spence1115/eslint-plugin-modules-newlines --save-dev
```
or
```
$ yarn add @spence1115/eslint-plugin-modules-newlines --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@spence1115/eslint-plugin-modules-newlines` globally.

## Usage

Add `"@spence1115/modules-newlines"` to the plugins section of your `.eslintrc` configuration file

```json
{
    "plugins": [
        "@spence1115/modules-newlines"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@spence1115/modules-newlines/import-declaration-newline": ["error/warn", {
            "nodeSpecifersLength": 3 // optional, allows more import/exports on a single line before forcing a line break
        }],
        "@spence1115/modules-newline/export-declaration-newline": "error/warn"
    }
}
```

## Supported Rules

* Enforce placing import variables on separate lines (import-declaration-newline)
* Enforce placing export variables on separate lines (export-declaration-newline)

## Links
https://www.npmjs.com/package/@spence1115/eslint-plugin-modules-newlines

