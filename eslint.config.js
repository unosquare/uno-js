// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    {
        files: ['src/*.ts'],
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off',
            'arrow-body-style': ['error', 'as-needed'],
        },
    },
);
