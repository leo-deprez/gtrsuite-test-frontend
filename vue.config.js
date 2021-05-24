module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/styles/abstract.scss";',
      },
    },
  },

  transpileDependencies: ['vuetify'],
}
