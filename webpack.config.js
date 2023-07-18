/*
 * @Description: 
 * @Author: gaozhanzhao
 * @Date: 2023-07-12 17:14:53
 * @LastEditTime: 2023-07-18 11:23:49
 * @LastEditors: gaozhanzhao
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const FriendlyErrorsPlugin = require('@soda/friendly-errors-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [
        //友好的错误提示插件
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: ['You application is running here http://localhost:8080'],
            },
            clearConsole: true,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'webpackplugintitle',
            inject: true,
            hash: true,
            favicon: '',
            meta: {
                'viewport': 'width=device-width, initial-scale=1.0'
            }

        }),
        new VueLoaderPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8080, // 服务器端口号
        hot: true, // 启用热模块替换
    },
}