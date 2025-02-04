const path = require('node:path');

module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    // TODO: Disabled until update to support TailwindCSS v4
    // https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/325
    // 'plugin:tailwindcss/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
  },
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-member-accessibility': ['warn', {accessibility: 'no-public'}],
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: 'never',
        classes: ['field', ['get', 'set'], 'constructor', 'method'],
      },
    ],
    '@typescript-eslint/no-loss-of-precision': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', {ignoreRestSiblings: true}],
    'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/require-description': 'warn',
    'import/no-cycle': ['error', {ignoreExternal: false}],
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'unknown',
          'type',
          'builtin',
          'external',
          'internal',
          'object',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            group: 'unknown',
            pattern: '**/*.+(css|sass|scss|less|styl)',
            patternOptions: {dot: true, nocomment: true},
            position: 'before',
          },
          {
            group: 'unknown',
            pattern: '{.,..}/**/*.+(css|sass|scss|less|styl)',
            patternOptions: {dot: true, nocomment: true},
            position: 'before',
          },
        ],
        warnOnUnassignedImports: true,
      },
    ],
    'import/no-default-export': 'error',
    'no-case-declarations': 'warn',
    'no-console': ['warn', {allow: ['info', 'warn', 'error']}],
    'no-param-reassign': 'warn',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../../', './../../'],
            message: 'Relative imports are not allowed. Please use the @/ alias.',
          },
        ],
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: ':matches(PropertyDefinition, MethodDefinition)[accessibility="private"]',
        message: 'Use #private instead',
      },
    ],
    'no-undef': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unreachable': 'warn',
    'object-curly-spacing': ['warn', 'never'],
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': ['warn', 'always', {markers: ['/']}],
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          args: false,
          prop: false,
          props: false,
          ref: false,
          refs: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*@(rc|.config).@(cjs|js|ts)', 'tests/**/*.ts'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: [
          path.resolve(__dirname, './tsconfig.json'),
          path.resolve(__dirname, './tsconfig.eslint.json'),
        ],
      },
    },
    react: {
      version: 'detect',
    },
    tailwindcss: {
      cssFiles: [],
      callees: ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
    },
  },
  ignorePatterns: ['node_modules', 'dist', 'build', 'coverage'],
};
