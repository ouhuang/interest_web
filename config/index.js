//参考 vue 2.5.2

'use strict'
const path = require('path');

const config = {
    dev: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        host: 'localhost',
        port: 8000,
        proxy: {
            "/emm": {
                target: "http://localhost:8080/",
                pathRewrite: {
                    "^/emm": ""
                }
            }
        },
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        devtool: 'inline-source-map',
        cacheBusting: true,
        cssSourceMap: true,
        quiet: true,

    },

    build: {
        index: path.resolve(__dirname, '../public/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        productionSourceMap: true,
        devtool: 'source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
const utils = {
    createNotifierCallback() {
        const notifier = require('node-notifier')
        const packageConfig = require('../package.json')

        return (severity, errors) => {
            if (severity !== 'error') return

            const error = errors[0]
            const filename = error.file && error.file.split('!').pop()

            notifier.notify({
                title: packageConfig.name,
                message: severity + ': ' + error.name,
                subtitle: filename || ''
            })
        }
    },
    assetsPath(_path) {
        const assetsSubDirectory = process.env.NODE_ENV === 'production'
            ? config.build.assetsSubDirectory
            : config.dev.assetsSubDirectory

        return path.posix.join(assetsSubDirectory, _path)
    }
}
module.exports = { ...config, ...utils };