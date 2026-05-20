const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    // Корректные пути к бандлам на GitHub Pages (репозиторий в подкаталоге /WorkEnvironment/)
    publicPath: "auto",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
});
