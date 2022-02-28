/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
  ],
  env: {
    'jest/globals': true,
    'browser': true,
  },
  plugins: ['import', '@typescript-eslint'],
  rules: {
    'curly': ['error', 'multi'],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['tests/**'],
      plugins: ['jest', 'jest-formatting'],
      extends: ['plugin:jest/all', 'plugin:jest-formatting/strict'],
    },
  ],
};
