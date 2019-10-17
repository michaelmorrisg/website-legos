module.exports = function (api) {
	api.cache(true);

	const presets = [ "@babel/preset-env", "@babel/preset-react" ];
	const plugins = [ ];
	const module = {
		rules: [
			{
                test: /\.*css$/,
                use : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use : [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
		]
	}

	return {
		presets,
		plugins,
		module
	};
};
