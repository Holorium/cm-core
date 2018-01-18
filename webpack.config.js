var webpack = require('webpack'),
    path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: ['./index.js'],
        vendor: ['jquery', 'underscore', 'vue'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                'eslint-loader',
            ]
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
