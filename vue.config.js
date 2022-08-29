const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://localhost:9000'
  }
})

// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:9000'
//   }
// }
