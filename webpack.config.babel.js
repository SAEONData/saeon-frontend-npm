import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const packageJson = require('./package.json');

export default () => ({
  mode: 'production',
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: packageJson.name,
    libraryTarget: 'umd',
    globalObject: 'this'
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        // loader: 'style-loader!css-loader!sass-loader'
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        //exclude: /node_modules/,
        //include: path.join(__dirname, 'src'),
        loader: 'style-loader!css-loader'
        //use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },

  externals: {
    react: 'react',
    reactDOM: 'react-dom'
  },

  plugins: [
    new CleanWebpackPlugin(['dist/*.*']),
    new MiniCssExtractPlugin({
      filename: '[name].css',     
    }),
  ],
  optimization: {
    // We no not want to minimize our code.
    minimize: false,
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       name: 'vendor',
    //       test: /\.css$/,
    //       chunks: 'all',
    //       enforce: true,
    //     },
    //   },
    // },
  }
});
