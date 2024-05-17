module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react-compiler', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    // Typescript Rules
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // React Rules
    'react-compiler/react-compiler': 'error',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    // Other Rules
    'id-length': ['warn', { min: 3, exceptions: ['id'] }],
  },
}
