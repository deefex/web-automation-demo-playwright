// eslint.config.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import parser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  playwright.configs['flat/recommended'],
  {
    files: ['**/*.ts'],
    ignores: ['node_modules', 'dist', 'playwright-report', 'test-results'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // General code style
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Playwright best practices
      'playwright/no-skipped-test': 'warn',
      'playwright/no-focused-test': 'error',
      'playwright/no-conditional-in-test': 'off',
      'playwright/expect-expect': ['warn', { assertFunctionNames: ['expect', 'assertLoginSuccess', 'assertInvalidLogin', 'assertSuccessfulLogin'] }],
    },
  },
];