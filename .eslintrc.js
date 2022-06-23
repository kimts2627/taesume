module.exports = {
  globals: {
    document: false,
    Map: false,
    Promise: false,
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', '/'],
      },
    },
  },
  rules: {
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
    'prettier/prettier': ['error', { singleQuote: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-useless-computed-key': 'error',
    'array-callback-return': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
};
