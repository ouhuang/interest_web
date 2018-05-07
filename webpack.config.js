const path = require('path');
const htmlWebpachPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    plugins: [
        new htmlWebpachPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}