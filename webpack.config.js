const path = require('path');

module.exports = {
    entry: './src/index.js',               // 入口文件
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename : 'app.js'
    },              // 出口文件
    module: {
        rules: [{
            // 格式
            test: /\.css$/,
            //順序是由下到上 css > style
            use: [
                'style-loader',
                'css-loader'
            ],
        }]

    },               // 處裡對應模組
    // plugins: [],             // 對應的插件
    // devServer: {},           // 服務器配置
    mode: 'development'      // 開發模式配置 production | development 
}