const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
         app :'./src/index.js'  // app => chunks  
    },               // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },              // 出口文件
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: './dist'
                }
            },
                'css-loader',
                'sass-loader'
            ],
        }]

    },          // 處裡對應模組
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./[name].css"
        }),
        new HtmlWebpackPlugin({
            chunks: ['app'],  //選擇注入資源 chunk
            inject: 'body', //預設<body> js </body>  head or body
            template: './src/index.html',//來源
            filename: 'index.html'
            // 目的地
        })

    ],  // 對應的插件
    // devServer: {},           // 服務器配置
    mode: 'development'      // 開發模式配置 production | development 
}