const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:9000'
//   }
// }
