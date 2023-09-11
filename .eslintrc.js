module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        'no-extend-native': 0,
        'no-param-reassign': 0,
        'max-classes-per-file': 0,
        '@typescript-eslint/no-explicit-any': 'warn',
        'prettier/prettier': 'error',
        '@typescript-eslint/restrict-template-expressions': 0,
        'arrow-body-style': ['error', 'as-needed'],
    },
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
};
