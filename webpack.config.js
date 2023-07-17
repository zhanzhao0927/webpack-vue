/*
 * @Description: 
 * @Author: gaozhanzhao
 * @Date: 2023-07-12 17:14:53
 * @LastEditTime: 2023-07-17 14:35:26
 * @LastEditors: gaozhanzhao
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [
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
        new VueLoaderPlugin()
    ],
    devServer: {
        host: 'test.m.iqiyi.com',
        compress: true, // 启用 gzip 压缩
        port: 8080, // 服务器端口号
        hot: true, // 启用热模块替换
        // open: true // 自动打开浏览器
    },
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
    }

}