'use strict'
const merge = require('webpack-merge'); //合并
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const portfinder = require('portfinder');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

process.env.NODE_ENV = 'development';
const common = require('./webpack.common');
const {
    dev,
    createNotifierCallback
} = require('./index.js')

const devWebpackConfig = merge(common, {
    mode: 'development',
    devtool: dev.devtool,
    devServer: {
        clientLogLevel: "warning", //屏蔽一些log
        historyApiFallback: { //任意的 404 响应都可能需要被替代为 index.html
            rewrites: [{
                from: /.*/,
                to: path.posix.join('/', 'index.html')
            }]
        },
        host: dev.host,
        port: dev.port,
        https: dev.https,
        contentBase: false, //因为我们使用 CopyWebpackPlugin。
        compress: true, //一切服务都启用gzip 压缩
        hot: true,
        inline: true,
        overlay: dev.errorOverlay //当出现编译错误或警告时，在浏览器中显示全屏覆盖。
            ?
            {
                warnings: false,
                errors: true
            } :
            false,
        proxy: dev.proxy,
        publicPath: dev.assetsPublicPath, //此路径下的打包文件可在浏览器中访问
        quiet: dev.quiet //启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), //以便更容易查看要修补(patch)的依赖。
    ]
})

module.exports = new Promise((resolve, reject) => {

    portfinder.basePort = process.env.PORT || devWebpackConfig.devServer.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
            // add port to devServer config
            devWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Server run in  http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: createNotifierCallback()
            }))
            resolve(devWebpackConfig)
        }
    })
})