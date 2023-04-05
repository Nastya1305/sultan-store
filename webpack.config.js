const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   mode: "development",
   entry: ["./src/index.tsx"],
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].js",
      publicPath: "/",
      assetModuleFilename: 'assets/images/[name][ext]'
   },
   devServer: {
      port: 3000,
      historyApiFallback: true
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
         "@img": path.resolve(__dirname, "src/assets/images")
      }
   },
   plugins: [
      new HTMLWebpackPlugin({ template: "./public/index.html" }),
      new CleanWebpackPlugin()
   ],
   module: {
      rules: [
         {
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader", "sass-loader"]
         },
         {
            test: /\.(jpg|jpeg|png|svg)$/,
            type: 'asset/resource',
            include: path.resolve(__dirname, "src"),
            generator: {
               filename: "assets/images/[name][ext]",
            },
         },
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ]
   }
}
