var webpack = require('webpack');
var path = require('path');
var glob = require("glob");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var str_place=__dirname+'/vue/js';

//var sSystem='/frontend';
var sSystem='/backend';

var ExtractLess = new ExtractTextPlugin('css'+sSystem+'.css');

function getEntry() {
    var entry = {};
    var srcDirName = str_place+sSystem+'/*/*.js';
    glob.sync(srcDirName).forEach(function (name) {
        //n 获取文件名字
        var n = name.slice(0, name.length - 3);
        n=n.replace(str_place+sSystem,'')
        entry[n] = name;
    });
    console.log(entry);
    return entry;
}

module.exports = {
    entry: getEntry(),
    output: {
        path: __dirname + sSystem+'/web/',
        filename: 'js[name].js'
    },
    module: {
        loaders: [
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue','.less'],
        alias: {
            'vue$': __dirname + '/node_modules/vue/dist/vue.js',

        }
    },
    // 插件项
    plugins: [
        ExtractLess,
        // 位于开发环境下
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        // 全局挂载插件
        new webpack.ProvidePlugin({
            Vue: "vue"
        })
    ]


}

