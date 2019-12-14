const path = require('path')
// Utils
const { assign } = Object
module.exports = {
  webpack: (config) => {
    assign(config, {
      resolve: assign(config.resolve, {
        alias: assign({}, config.resolve.alias, {
          '@framework': path.resolve('framework'),
          '@components': path.resolve('components'),
          '@system': path.resolve('system'),
        }),
      }),
    })

    return config
  }
}
