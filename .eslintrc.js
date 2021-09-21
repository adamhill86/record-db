const rules = require('@perfective/eslint-config-react/rules');

module.exports = {
  extends: [
    '@perfective/eslint-config-react',
    'plugin:@next/next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'indent': 'off',
    'max-len': ['off', { code: 140, ignoreRegExpLiterals: true, ignoreUrls: true }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'jsx-quotes': ['warn', 'prefer-single'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-extra-parens': [
      'error',
      'all',
      {
        enforceForArrowConditionals: false,
        ignoreJSX: 'all'
      }
    ],
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-unassigned-import': 'off',
    // This rule is not necessary inside Next projects because it adds it for you.
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-literals': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-component-props': 'off',
    'react/require-default-props': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off',
    '@typescript-eslint/tslint/config': ['error', rules.typescriptEslintTslintConfig({
      'no-default-import': false,
    })],
    '@typescript-eslint/naming-convention': ['error', ...rules.typescriptEslintNamingConvention([
      {
        selector: 'property',
        leadingUnderscore: 'allowDouble',
        format: ['strictCamelCase']
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase']
      }
    ])],
    'node/no-sync': 'off',
    'require-unicode-regexp': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};
