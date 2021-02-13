const path = require("path");
const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");

module.exports = withPlugins([
  withSvgr({
    includeFileLoader: true,
    svgrOptions: {
      configFile: path.resolve(__dirname, "svgr.config.js"),
    },
  }),
]);
