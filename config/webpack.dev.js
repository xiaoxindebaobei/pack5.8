//开发

const {merge} = require('webpack-merge'); //引入合并插件
const common = require('./webpack.common.js');

module.exports = merge(common,{//将common合并到当前文件
    mode:'development',
    devServer: {
        port:'8088',//端口号
        inline:true,//文件修改后实时刷新
        historyApiFallback: true,//不跳转
        hot:true
    },
})