'use strict';

const resolve = require('path').resolve;
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

/* eslint-disable no-undef */
const srcPath = resolve(__dirname, 'src');
const dstPath = resolve(__dirname, 'dist');
/* eslint-enable no-undef */

const devServerHost = 'localhost';
const devServerPort = 4200;
const devServerPublicPath = '/';
const devServerUrl = 'http://' + devServerHost + ':' + devServerPort;

module.exports = {
    mode: 'development',

    context: srcPath,

    entry: { snowclone: './main.js' },

    output: {
        filename: '[name].js',
        path: dstPath
    },

    devServer: {
        port: devServerPort,
        host: devServerHost,
        publicPath: devServerPublicPath,
        contentBase: srcPath
    },

    performance: { hints: false },

    plugins: [
        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true),
            'typeof EXPERIMENTAL': JSON.stringify(false),
            'typeof PLUGIN_CAMERA3D': JSON.stringify(false),
            'typeof PLUGIN_FBINSTANT': JSON.stringify(false)
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: `${srcPath}/index.html`,
            filename: 'index.html',
            inject: 'body'
        }),
        new OpenBrowserWebpackPlugin({ url: devServerUrl })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ]
            }
        ]
    },

    devtool: 'source-map'
};
