const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = env => {
  return {
    //ReferenceError: regeneratorRuntime is not defined => polyfill
    entry: { app: ["@babel/polyfill", "./src/index.ts"] },
    devtool: "inline-source-map",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist")
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
              presets: ["@babel/preset-env", "@babel/preset-typescript"]
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
