const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let config = {
	entry: {
		app: './src/app.jsx'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
		publicPath: '/'
	},
	module: {
		rules: [
				{
		      test: /\.jsx$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['react']
		        }
		      }
	    	},
	    	{
          test: /\.scss$/,
          loaders: ExtractTextPlugin.extract({
          	fallback: "style-loader",
          	use: [{
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }]
          })
        },
        {
	        test: /\.(png|jpg|gif)$/,
	        use: [
	          {
	            loader: 'url-loader',
	            options: {
	              limit: 8192
	            }
	          }
	        ]
	      }
		]	
	},
	devServer: {
    historyApiFallback: true,
  },
	plugins: [
		new ExtractTextPlugin('./style.css', {
      allChunks: true
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
    	'process.env.NODE_ENV': JSON.stringify('production')
  	})
	]
}

module.exports = config;