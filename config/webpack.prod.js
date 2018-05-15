'use strict'
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包后html 模板
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //打包压缩
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清空上次打包文件
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'); // css 压缩

process.env.NODE_ENV = 'production';
const common = require('./webpack.common');
const { build, assetsPath } = require('./index.js')

const prodWebpackConfig = merge(common, {
    mode: "production",
    output: {
        path: build.assetsRoot,
        publicPath: build.assetsPublicPath,
        filename: assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: assetsPath('js/[id].[chunkhash].js')
    },
    devtool: build.productionSourceMap ? build.devtool : false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: true,
            minify: { //压缩index.html
                removeComments: true, //去除HTML评论
                collapseWhitespace: true, //折叠有助于文档树中文本节点的空白区域
                removeAttributeQuotes: true //使用仅包含空白的值删除所有属性
            }
        }),
        new CleanWebpackPlugin([build.assetsSubDirectory], {
            root: build.assetsRoot
        }),
        new webpack.HashedModuleIdsPlugin(),

        new UglifyJSPlugin({
            sourceMap: !!build.productionSourceMap
        }),
        new OptimizeCSSPlugin({ //css压缩
            cssProcessorOptions: build.productionSourceMap
                ? { safe: true, map: { inline: false } }
                : { safe: true }
        })
        //CommonsChunkPlugin 4移除，有时间看一下新的
    ]
})


module.exports = () => {
    console.log(assetsPath('1'));
    return prodWebpackConfig
}