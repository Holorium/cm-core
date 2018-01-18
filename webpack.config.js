var webpack = require('webpack'),
    path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: ['materialize-loader', './index.js'],
        vendor: ['jquery', 'underscore', 'vue'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{ // basic js loaders
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                'eslint-loader',
            ]
        }, { // used for materialize fonts
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                mimetype: 'application/font-woff'
            }
        }, { // used for materialize fonts
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        })
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    }
};
