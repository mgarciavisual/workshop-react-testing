var path = require('path'),
	webpack = require('webpack');

module.exports = {
	// Entry point for the bundle.
	entry: [
		'./src/index.js'
	],

	output: {
		// Output directory.
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: [ 'style', 'css', 'sass' ]
		}, {
			test: /\.(js|jsx)$/i,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel'
		}]
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	devServer: {
		historyApiFallback: true,
		contentBase: './src',
		inline: true,
		hot: true
	}
};