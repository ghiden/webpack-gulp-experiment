module.exports = {
  entry: './app/components/Main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css?$/, loader: 'style!css' }
    ]
  }
}
