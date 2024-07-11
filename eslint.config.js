// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
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
