const path = require('path')
const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withPWA = require('next-pwa')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  pwa: {
    dest: 'public',
    disable: isDev,
  },
}

module.exports = withPlugins(
  [
    { rewrites: async () => nextI18NextRewrites() },
    withSvgr({
      includeFileLoader: true,
      svgrOptions: {
        configFile: path.resolve(__dirname, 'svgr.config.js'),
      },
    }),
  ],
  withPWA(nextConfig)
)
