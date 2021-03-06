const webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  devtool: 'eval-cheap-module-source-map',

  entry: {
    main: ['webpack-hot-middleware/client', './src/index'],
  },

  resolve: {
    unsafeCache: true,
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css?module&localIdentName=[path]__[name]__[local]!postcss',
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
