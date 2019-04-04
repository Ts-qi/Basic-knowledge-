const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap
const HappyPack = require('happypack');

module.exports = {
    devtool:'cheap-module-eval-source-map',
    mode: 'development',
    entry: {
        filename: './src/index.js'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname ,'dist'),
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpeg|gif|svg|jpg)$/,
                use: [ 'url-loader']
            },

            {
                test: /\.styl$/, 
                use: [
                     MiniCssExtractPlugin.loader
                    , 'css-loader', 'stylus-loader'],
                 
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader?cacheDirectory=true'
                }
            },
            // {
            //     test: /\.js$/,
            //     // 将对.js文件的处理转交给id为babel的HappyPack的实列
            //     use: ['happypack/loader?id=babel'],
            //     // loader: 'babel-loader',
            //     exclude: path.resolve(__dirname, 'node_modules') // 排除文件
            //   }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react-project',
            template:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash:8].css",
            chunkFilename: "[name].chunk.[chunkhash:8].css"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new HappyPack({
        //     // 用唯一的标识符id来代表当前的HappyPack 处理一类特定的文件
        //     id: 'babel',
        //     cache: false,
        //     // 如何处理.js文件，用法和Loader配置是一样的
        //     loaders: ['babel-loader']
        //   }),
    ],
    devServer : {
        contentBase: './dist',
        hot: true,
        port: 9000,
        historyApiFallback: true
    }

}