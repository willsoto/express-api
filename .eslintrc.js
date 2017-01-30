let isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: { commonjs: true, es6: true, node: true },
  parserOptions: { sourceType: 'module' },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [ 'import' ],
  // add your custom rules here
  rules: {
    indent: [ 'error', 2 ],
    quotes: [ 'error', 'single' ],
    semi: 2,
    'import/extensions': [ 'error', 'always', { js: 'never' } ],
    'no-console': 1,
    // allow debugger during development
    'no-debugger': 1,
    'no-unused-vars': isProduction ? 2 : 1
  }
};

