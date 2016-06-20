var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SpritesmithPlugin = require('webpack-spritesmith');

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
            { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" },   //全局jquery
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            // { test: /\.css$/, loader: "style!css!autoprefixer?strictMath&noIeCompat" },
            // { test: /\.less$/, loader: 'style!css!less?sourceMap&strictMath&noIeCompat!autoprefixer?{browsers:["last 2 version", "Firefox 15"]}'},
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style", "css","less?strictMath&noIeCompat","autoprefixer-loader??{browsers:['last 2 version', 'Firefox 15']}") },
            { test: /\.(jpe?g|png|gif)$/i, loaders: [
                'url?limit=1&name=images/[hash:8].[name].[ext]',
                'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ],exclude: path.resolve(__dirname, 'src/asset/icon') },
            { test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'}
        ]
    },
    resolve: {
        modulesDirectories: ["web_modules", "node_modules", "spritesmith-generated"]
    },
    vue: {
        loaders: {
            css: 'style!css!less?sourceMap&strictMath&noIeCompat!autoprefixer'
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.NoErrorsPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:4001' }),
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          }
        }),
        new ExtractTextPlugin('[hash:8].style.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          title: 'vue_webpack',
          template: path.join(__dirname,'./src/index.html'),
          hash:false
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/asset/icon'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'src/asset/sprite/sprite.png'),
                css: path.resolve(__dirname, 'src/asset/sprite/sprite.styl.less')
            },
            apiOptions: {
               cssImageRef: './images/sprite.png'
             }
        }),
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
    devServer: {
      hot: true,
      quiet: false,
      noInfo: false,
      historyApiFallback: true,
      publicPath: '/',
        proxy: {
          '/api/*': {
            target: 'http://45.32.88.92/',
            rewrite: function(req) {
                 req.url = req.url.replace(/^\/api/, '');
               }
          }
        },
        stats: { colors: true }
    },
    devtool: 'eval-source-map'
};
