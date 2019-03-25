const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const env = process.env.NODE_ENV;

const config = {
  mode: env || 'development'
};

const stylesSettings = (modularize) => {
  const cssLoader = {
    modules: modularize,
    sourceMap: true
  };
  if (modularize) {
    cssLoader.importLoaders = 1;
    cssLoader.localIdentName = "[name]_[local]_[hash:base64]";
  }
  const settings = [
    {
      loader: "style-loader", options: {
        singleton: true,
      }
    }, // creates style nodes from JS strings
    {
      loader: "css-loader", options: cssLoader
    }, // translates CSS into CommonJS
    {
      loader: "postcss-loader"
    }, // assign prefixes to modern properties to increase browser compatibility
    {
      loader: "sass-loader", options: {
        sourceMap: true,
      }
    } // compiles Sass to CSS, using Node Sass by default
  ];
  return settings;
};

const webpackConfig = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: stylesSettings(false)
      },
      {
        test: /\.module.scss$/,
        use: stylesSettings(true)
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      'assets'
    ])
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};

if (config.mode === 'development') {
  webpackConfig.devtool = 'inline-source-map';
} else if (config.mode === 'production') {
  webpackConfig.plugins.push(new UglifyJSPlugin({
    sourceMap: false
  }));
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }));
  
}

module.exports = webpackConfig;
