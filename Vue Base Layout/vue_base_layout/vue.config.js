const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Vue Base Layout',
    },
  },
  configureWebpack: {
    plugins: [
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        // additionalData: `@import "@/assets/SCSS/style.scss"`
      },
    },
  },
})
