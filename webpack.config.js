module.exports = {
  entry: './gears.js',
  output: {
    path: '.',
    filename: 'gears.bundled.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  }
}
