var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app:["./src/entry.js"]
    },
    output: {
        path: path.join(__dirname,"./dist"),
        filename: "[name].js",
        publicPath: "/",
        hash: true
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css!autoprefixer" },
            { test: /\.less$/, loader: 'style!css!autoprefixer?{browsers:["last 2 version", "Firefox 15"]}!less'},
            { test: /\.(jpe?g|png|gif)$/i, loaders: [
                'url?limit=10000&name=images/[hash:8].[name].[ext]',
                'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]}
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
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          }
        }),
        new webpack.HotModuleReplacementPlugin(),
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