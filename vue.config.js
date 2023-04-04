const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { allowedHosts: 'all', },

  pluginOptions: {
    moment: {
      locales: [
        ''
      ]
    }
  },

  publicPath: '//vue-cli/dist'
})
