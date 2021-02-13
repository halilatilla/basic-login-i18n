const path = require('path')
const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

module.exports = withPlugins([
  { rewrites: async () => nextI18NextRewrites() },
  withSvgr({
    includeFileLoader: true,
    svgrOptions: {
      configFile: path.resolve(__dirname, 'svgr.config.js'),
    },
  }),
])
