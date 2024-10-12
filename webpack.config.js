/**
 * @import {Options} from '@mdx-js/loader'
 * @import {Configuration} from 'webpack'
 */

/** @type {Configuration} */
const webpackConfig = {
  module: {
    // …
    rules: [
      // …
      {
        test: /\.mdx?$/,
        use: [
          // Babel is optional:
          { loader: "babel-loader", options: {} },
          {
            loader: "@mdx-js/loader",
            /** @type {Options} */
            options: {
              /* jsxImportSource: …, otherOptions… */
            },
          },
        ],
      },
    ],
  },
};

export default webpackConfig;
