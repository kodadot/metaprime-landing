export default {
  plugins: [
    'snowpack-vue-svg-plugin'
  ],
  alias: {
    '@': './src',
    '~': './src',
    '@components': './src/components',
    '@layouts': './src/layouts'
  },
  exclude: [
    '**/node_modules/**/*'
  ]
}
