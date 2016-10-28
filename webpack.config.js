module.exports = {
  entry: {
    'gears': './gears.js',
    'gear-coordinator': './gear-coordinator.js',
    'uni': './uni.js',
    'weapon-finder': './weapon-finder.js'
  },
  output: {
    path: '.',
    filename: '[name].bundled.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  }
}
