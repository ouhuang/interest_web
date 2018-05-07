const path = require('path');
const htmlWebpachPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js', //入口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'  //出口
    },
    plugins: [
        new htmlWebpachPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ], // 生成index.html 并自己引用 build.js

    /******
     * webpack最重要的配置都在modules（模块）里，
     * loaders（加载器）是处理源文件的，
     * 后面你会看到，loader可以处理不同的js（jsx, es6等）编译成js，less等编译成css，
     * 将项目中引用的图片等静态资源路径处理成打包以后可以正确识别的路径等。
     */
    module: {
        rules: [  //配置加载器
            {
                test: /\.js$/, //匹配要处理的文件，正则匹配以.js结尾
                loader: 'babel-loader'//使用加载器的名称
            }
        ]
    }
}