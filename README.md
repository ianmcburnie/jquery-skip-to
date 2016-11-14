# jquery-skip-to

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-skip-to"><img src="https://api.travis-ci.org/ianmcburnie/jquery-skip-to.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-skip-to?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-skip-to/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-skip-to"><img src="https://david-dm.org/ianmcburnie/jquery-skip-to.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-skip-to#info=devDependencies"><img src="https://david-dm.org/ianmcburnie/jquery-skip-to/dev-status.svg" alt="devDependency status" /></a>
</p>

jQuery collection plugin that enhances a skip to link for screen reader navigation.


```js
$(widgetSelector).skipTo();
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
npm install jquery-skip-to
```

## Dependencies

* [jquery](https://jquery.com/)

## Development

Useful NPM task runners:

* `npm start` for local browser-sync development.
* `npm test` runs tests & generates reports (see reports section below)
* `npm run tdd` test driven development: watches code and re-tests after any change
* `npm run build` cleans, lints, tests and minifies

Execute `npm run` to view all available CLI scripts.

## CI Build

https://travis-ci.org/ianmcburnie/jquery-skip-to

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-skip-to?branch=master

## Test Reports

Local test reports are generated under `test_reports` folder.

## JSDocs

Local JSDocs are generated under `jsdoc` folder.
