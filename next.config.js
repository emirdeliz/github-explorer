const path = require('path')
// Utils
const { assign } = Object
module.exports = {
  webpack: (config) => {
    assign(config, {
      resolve: assign(config.resolve, {
        alias: assign({}, config.resolve.alias, {
          '@framework': path.resolve('src/framework'),
          '@components': path.resolve('src/components'),
          '@system': path.resolve('src/system'),
        }),
      }),
    })

    return config
  }
}
