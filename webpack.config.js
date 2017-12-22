const webpack = require('webpack');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

const publicPath = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://kooriko.github.io/dist/';
const devtool = process.env.NODE_ENV === 'development' ? 'source-map' : '';

const config = {
    devtool,
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    outputPath: 'images/'
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '_': 'lodash',
            '$': 'moment',
            'axios': 'axios'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['lodash', 'moment'],
            filename: 'assets/js/[name].min.js',
            minChunks: 2
        }),
        new UglifyjsPlugin(),
        new HtmlPlugin({
            template: './src/index.html',
            minify: {
                removeAttributeQuotes: true,
            },
            hash: true,
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: 3001,
        compress: true
    }
}

module.exports = config;