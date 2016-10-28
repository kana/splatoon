module.exports = {
  entry: './gears.js',
  output: {
    path: './bin',
    filename: 'gears.bundled.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  }
}
