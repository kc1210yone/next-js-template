import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigNextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import eslintConfigNextTypescript from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
  ...eslintConfigNextCoreWebVitals,
  ...eslintConfigNextTypescript,
  {
    plugins: {
      'unused-imports': eslintPluginUnusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
  eslintConfigPrettier,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'coverage/**',
  ]),
]);
