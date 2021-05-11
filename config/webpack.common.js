const path=require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports= {
    entry: {
        main:path.join(__dirname,'../src/main.js'),
        two:path.join(__dirname,'../src/two.js'),
    },
    output: {
        //将所有的依赖模块输入到bundle.js
        filename: "[name].js",
        //将输出文件放到dist文件夹下
        path: path.join(__dirname, "..", "dist")
    },
    //给src文件夹起个别名
    resolve: {
        alias: {
            "@": path.resolve ("src")
        }
    },
    module: {
        rules: [
            {
                //用正则表达式去匹配要用该Loader转换的css文件
                test: /\.css$/,
                use: ['style-loader','css-loader','postcss-loader'],
            },
            {
                //处理scss文件
                test: /\.(scss|sass)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },'css-loader','postcss-loader','sass-loader'],
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/   // 排除匹配node_modules模块
            },
        ]
    },
}