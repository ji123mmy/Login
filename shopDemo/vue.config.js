const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {

    chainWebpack: config => {
        config.resolve.alias // 添加别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@store', resolve('src/store'));
    },
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            // 配置跨域
            '/api': {
                target: 'https://vue-course-api.hexschool.io/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave: false
}