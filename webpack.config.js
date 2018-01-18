var webpack = require('webpack'),
    path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: ['./index.js'],
        vendor: ['jquery', 'underscore'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    // eslint options (if necessary)
                }
            },
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        })
    ]
};
