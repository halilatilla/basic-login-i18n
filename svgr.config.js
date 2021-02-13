module.exports = {
  plugins: ["@svgr/plugin-jsx"],
  icon: true,
  jsx: {
    babelConfig: {
      plugins: [
        [
          "@svgr/babel-plugin-add-jsx-attribute",
          {
            elements: ["path", "svg"],
            attributes: [
              {
                name: "fill",
                value: "currentColor",
                spread: false,
                literal: false,
                position: "end",
              },
              {
                name: "className",
                value: "icon",
                spread: false,
                literal: false,
                position: "end",
              },
            ],
          },
        ],
      ],
    },
  },
};
