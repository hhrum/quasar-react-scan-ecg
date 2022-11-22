const path = require('path')

module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },  
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'prettier',
    'eslint-plugin-prettier',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@Components', path.resolve(__dirname, 'src/components/')],
          ['@Assets', path.resolve(__dirname, 'src/assets/')],
          ['@Hooks', path.resolve(__dirname, 'src/hooks/')],
          ['@Utils', path.resolve(__dirname, 'src/utils/')],
          ['@Constants', path.resolve(__dirname, 'src/constants/')],
          ['@Layouts', path.resolve(__dirname, 'src/layouts/')],
          ['@Pages', path.resolve(__dirname, 'src/pages/')],
        ],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
  },
  rules: {
    'import/no-unresolved': [
      0,
      {
        commonjs: true,
        amd: true,
      },
    ],
    'prettier/prettier': [2, { "endOfLine": "auto"}, { usePrettierrc: true }],
    'react/jsx-uses-react': [0],
    'react/react-in-jsx-scope': [0],

    "no-unused-vars": [0],
    "@typescript-eslint/no-unused-vars": [2],
    "@typescript-eslint/ban-types": [2],

    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'linebreak-style': [0],
    // 'max-len': [2, 100],
  },
}
