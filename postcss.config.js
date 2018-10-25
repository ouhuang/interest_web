module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env'),
        require('postcss-pxtorem')({
            rootValue: 10,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 1
        })
    ]
}