import js from '@eslint/js';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
    js.configs.recommended,
    {
        files: ['src/**/*.ts'],
        languageOptions: {
            parser: eslintParserTypescript,
            parserOptions: {
                project: true,
                tsconfigRootDir: __dirname,
            },
        },
        plugins: {
            eslintPluginTypescript,
            eslintPluginPrettier,
        },
        rules: {
            'no-extend-native': 'off',
            'no-param-reassign': 'off',
            'max-classes-per-file': 'off',
            'eslintPluginTypescript/no-explicit-any': 'warn',
            'eslintPluginTypescript/restrict-template-expressions': 'off',
            'eslintPluginPrettier/prettier': 'error',
            'arrow-body-style': ['error', 'as-needed'],
        },
    },
];
