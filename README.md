# showbie-stylelint-config

[![npm version][npm-img]][npm-url]

[Stylelint][] configuration for Showbie projects.

## Usage

Install the conventions by running:

```sh
yarn add -D stylelint @showbie/stylelint-config
```

Then add the extends to your `.stylelintrc.js`:

```js
{
  extends: ['@showbie/stylelint-config'],
  rules: { /* … */ }
}
```

[npm-url]: https://www.npmjs.com/package/@showbie/stylelint-config

[npm-img]: https://img.shields.io/npm/v/@showbie/stylelint-config.svg?style=flat-square

[stylelint]: https://stylelint.io
