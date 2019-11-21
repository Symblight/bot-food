// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const { resolve } = require('path');
const SRC = resolve(__dirname, '..', 'src');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [resolve(__dirname, "..", 'src'), 'node_modules'],
    alias: {
      src: resolve(__dirname, "..", "src"),
      ui: resolve(__dirname, "..", 'src/ui'),
      structures: resolve(__dirname, '..', 'src/structures')
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: resolve(__dirname, "..", "src"),
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
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
        include: resolve(__dirname, "..", "src"),
      },
    ],
  },
};