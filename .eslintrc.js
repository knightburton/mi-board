module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'max-len': ['error', { code: 140, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],
    'react/prop-types': ['error', { ignore: ['classes'] }],
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }]
  },
  overrides: [
    {
      files: ['index.js'],
      rules: {
        'react/jsx-filename-extension': 'off'
      }
    }
  ]
};
