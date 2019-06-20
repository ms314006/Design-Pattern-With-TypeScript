module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
      es6: true,
      node: true,
    },
    extends: 'airbnb',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'typescript',
    ],
    rules: {
      'no-console': 'off',
      'class-methods-use-this': ['off']
    },
};