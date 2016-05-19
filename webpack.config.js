var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.join(__dirname,"./dist"),
        filename: "[name].js",
        hash: true
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css!autoprefixer" },
            { test: /\.less$/, loader: 'style!css!autoprefixer?{browsers:["last 2 version", "Firefox 15"]}!less'}
        ]
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer!less'
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'vue_webpack',
          template: path.join(__dirname,'./index.html'),
        })
    ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
  devtool: '#source-map'
};