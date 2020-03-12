const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = env => {
  const isDev = env.NODE_ENV === "development";

  const terserPlugin = isDev
    ? new TerserPlugin({
        terserOptions: {
          output: {
            comments: /@swagger/i
          },
          keep_classnames: true
        }
      })
    : new TerserPlugin({
        terserOptions: {
          keep_classnames: true
        }
      });

  return {
    // ReferenceError: regeneratorRuntime is not defined => polyfill
    entry: { app: ["@babel/polyfill", "./src/index.ts"] },
    devtool: "source-map",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist")
    },
    optimization: {
      minimize: true,
      minimizer: [terserPlugin]
    },

    mode: env.NODE_ENV,
    target: "node",
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.(ts|js)?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
              plugins: [
                ["@babel/plugin-proposal-decorators", { legacy: true }],
                ["@babel/plugin-proposal-class-properties", { loose: true }]
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".js", ".json"],
      alias: {
        "@": path.join(__dirname, "src")
      }
    }
  };
};
