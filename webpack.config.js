var webpack = require('webpack'),
    path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: ['./index.js'],
        vendor: ['font-awesome-webpack', 'vue'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{ // .vue loader including scss and sass
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    'scss': 'vue-style-loader!css-loader!sass-loader',
                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                }
            }
          }, { // basic js loaders
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
        }, { // load css
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
        })
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
        }
    }
};
