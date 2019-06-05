const path = require('path');

module.exports = {
  entry: './src/index.js', 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    jQuery: 'jQuery'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 9000,
    hot: true,
    inline: true,
    compress: true,
  }
};