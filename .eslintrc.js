module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['simple-import-sort'],
  ignorePatterns: ['**/*.config.js', '**/*.eslintrc.js'],
  globals: {},
  rules: {
    // TypeScript
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // simple-import-sort
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^react', '^@?\\w'], // Packages. `react` related packages come first.
          ['^(components|modules|utils)(/.*|$)'], // Internal packages.

          ['^~/api?\\w'],
          ['^~/assets?\\w', '^~/components?\\w', '^~/pages?\\w'],
          ['^~/hooks?\\w', '^~/utils?\\w', '^~/states?\\w'],
          ['^~/types?\\w'],
          ['^~/?\\w'],
          ['^\\u0000'],

          ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent imports. Put `..` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Other relative imports. Put same-folder imports and `.` last.
          ['^.+\\.s?css$'], // Style imports.
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
  },
  overrides: [
    {
      files: ['**/*.test.ts?(x)', '**/*.stories.ts?(x)'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
};
