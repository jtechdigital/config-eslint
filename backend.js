/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
  ],
  settings: {
    node: { allowModules: [], tryExtensions: ['.ts', '.js'] },
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-restricted-imports': ['error', { paths: ['.', '..'] }],
    'node/no-extraneous-import': 'off',
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'node/no-unpublished-import': ['error', { allowModules: ['type-fest', '@jtechdigital/type'] }],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  overrides: [],
};
