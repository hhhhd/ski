# Ski

Customizable mobile components for Vue.js

## Installation

```bash
yarn add ski-ui
```

## Import global styles

If you have main.css and required main.css in main.js:

```js
// main.js
require('./main.css')
```

You can:

```css
/* main.css */
@import '~ski-ui/dist/default.css';
```

If not, you can require it directly:

```js
// main.js
require('ski-ui/dist/default.css')
```

## Usage

locally:

```js
import { button } from 'ski-ui'
```

globally:

[WIP]

## Development (contributors only)

``` bash
# install dependencies
yarn install

# build for production (UMD)
yarn build

# run unit tests
yarn unit

# run all tests
yarn test
```

After `npm link`, open ski-playground && `npm link ski-ui` && start coding.

Attention: It will imported source code, so ski-playground do not need import global style, but less-loader, html-loader, vue class component, babel & plugins, etc are required.
