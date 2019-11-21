const { resolve } = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const DIST = resolve(__dirname, '..', 'dist');
const ENTRY_PATH = resolve(__dirname, '..', 'src/index.tsx');
const ENTRY_HTML_FILE = resolve(__dirname, '..', 'public/index.html');

module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: DIST,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      ui: resolve(__dirname, '..', 'src/ui'),
      features: resolve(__dirname, 'src/features'),
      src: resolve(__dirname, '..', 'src'),
      structures: resolve(__dirname, '..', 'src/structures'),
      "@webroot": resolve(__dirname, '..', 'src/webroot'),
    },
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Delivery dashboard',
      template: ENTRY_HTML_FILE,
      favicon: resolve(__dirname, '..', 'public/favicon.ico'),
    }),
    new WebpackPwaManifest({
      name: 'Delivery dashboard',
      short_name: 'Delivery dashboard',
      description: 'Delivery dashboard',
      background_color: '#ffffff',
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
