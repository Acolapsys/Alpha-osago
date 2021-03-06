module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off'
  }
}
