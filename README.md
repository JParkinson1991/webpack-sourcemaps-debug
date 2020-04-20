# Webpack: CSS/SCSS Sourcemap Errors

A simple repository to show errors in sourcemap generation by webpack.

## Updates

- Bug has been narrowed to down to `node-sass` `css-loader` bindings
- Sourcemaps generated as expected when
  - Using `node-sass` standalone _[Scenario 1]_
  - Using `sass/css-loader` with `dart-sass` via webpack _[Scenario 2]_
- Sourcemaps point to wrong files when
  - Using `sass/css-loader` with `node-sass` via webpack _[Scenario 3]_

## Installation & Usage

### Installing

- Install [node.js](https://nodejs.org/en/)
- Spin up local web server
- Clone the repository
- `cd [repository root] && npm install`

### Usage

Open the index.html file under `./public`

#### Commands

```
# [Scenario 1] - Passing
# Compiles source/generates sourcemaps via node-sass only
$ build:node-sass

# [Scenario 2] - Passing
# Compiles source/generates sourcemaps with dart sass via webpack
$ npm run build:webpack:dart

# [Scenario 3] - Failing
# Compiles source/generates sourcemaps with node sass via webpack
$ npm run build:webpack:node
```