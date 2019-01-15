const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        filename: './src/index.js'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname ,'dist')
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react-project',
            template:'./index.html'
        })
    ]
}