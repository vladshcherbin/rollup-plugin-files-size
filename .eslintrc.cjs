module.exports = {
  extends: 'airbnb-base',
  plugins: ['sort-destructure-keys'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-console': 'off',
    semi: ['error', 'never'],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': ['error', { groups: ['builtin', 'external', 'internal'], alphabetize: { order: 'asc' } }],
    'sort-destructure-keys/sort-destructure-keys': 'error'
  },
  env: {
    jest: true
  }
}
