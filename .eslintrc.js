module.exports = {
  env: {
    'es2021': true,
    'node': true,
    'react-native/react-native': true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react-native/all'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['@typescript-eslint', 'react', 'react-native'],

  rules: {
    // General
    'indent': ['error', 2, { SwitchCase: 1 }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],

    // TypeScript
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],

    // React
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/function-component-definition': ['error', { namedComponents: 'function-expression' }],
    'react/prop-types': ['off'],

    // React Native
    'react-native/sort-styles': ['off'],
  },
};
