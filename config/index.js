//参考 vue 2.5.2

'use strict'
const path = require('path')

module.exports = {
    dev: {

        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        host: 'localhost',
        port: 8080,
        proxyTable: {},
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        devtool: 'cheap-module-eval-source-map',
        cacheBusting: true,
        cssSourceMap: true,
        quiet: true,
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
        }
    },

    build: {
        index: path.resolve(__dirname, '../public/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        productionSourceMap: true,
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
