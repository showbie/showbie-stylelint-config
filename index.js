module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-config-property-sort-order-smacss',
  ],
  rules: {
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'selector-class-pattern': ['^[a-z0-9\\-_]+$'],
    'selector-no-qualifying-type': [true, { ignore: 'class' }],

    'order/order': [
      [
        {
          type: 'at-rule',
          name: 'import',
        },
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          hasBlock: true,
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        {
          type: 'rule',
          selector: '/^&:\\w/',
        },
        {
          type: 'rule',
          selector: '/^&::\\w/',
        },
        // Not sure if these next 2 at-rule objects are working
        // as intended. Leaving in for now.
        {
          type: 'at-rule',
          name: 'at-root',
          hasBlock: true,
        },
        {
          type: 'at-rule',
          name: 'each',
          hasBlock: true,
        },
        'rules',
      ],
    ],
    'order/properties-alphabetical-order': null,

    'scss/dollar-variable-colon-space-after': 'at-least-one-space',

    // "Pod" component styles make heavy use of `&` selector.
    'scss/selector-no-redundant-nesting-selector': null,
  },
};
