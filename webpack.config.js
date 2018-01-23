const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const version = process.env.npm_package_version || '-development';

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: ['@/index.js'],
        vendor: [
            'font-awesome-webpack',
            'materialize-css',
            'materialize-css/dist/css/materialize.min.css',
            'jquery',
            'underscore',
            'vue',
            'vue-router',
        ],
    },
    output: {
        filename: '[name].bundle.' + version + '.js',
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
                name: './fonts/[hash].[ext]',
                mimetype: 'application/font-woff'
            }
        }, { // used for materialize fonts
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {
                name: './fonts/[hash].[ext]',
            }
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
            '_': 'underscore',
            'window._': 'underscore',
        }),
        // add version number to html file
        new CopyWebpackPlugin([{
            from: '../static',
            to: '.',
            transform: function (content) {
                const str = content.toString();
                return str.replace(/(src="[^"]*)(\.js")/g, '$1.' + version + '$2');
            }
        }])
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname, 'src')
        }
    }
};

if (process.env.NODE_ENV === 'production') {
    const CleanWebpackPlugin = require('clean-webpack-plugin');
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    // use this to hot replace NODE_ENV in vuejs source
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }));
    config.plugins.push(new CleanWebpackPlugin(['dist']));
    config.plugins.push(new UglifyJsPlugin());
}

module.exports = config;
