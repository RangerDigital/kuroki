module.exports = {
  env: {
    browser: false,
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},

  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
    },
  ],
};
