const { override, fixBabelImports, addLessLoader, addWebpackAlias, addBabelPlugins } = require('customize-cra');
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
// 线上环境关掉 sourceMap  
process.env.GENERATE_SOURCEMAP = process.env.NODE_ENV === 'development' ? 'true' : 'false';
module.exports = {
    webpack: override(
        // antd按需加载，不需要每个页面都引入‘antd/dist/antd.css’
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
        }),
        ...addBabelPlugins( // 支持装饰器
            [
                '@babel/plugin-proposal-decorators',
                { legacy: true }
            ]
        ),
        // 配置路径别名
        addWebpackAlias({
            '@': resolve("src"),
            'components': resolve("src/components"),
            'assets': resolve("src/assets"),
            'utils': resolve("src/utils"),
            'pages': resolve('src/pages'),
            'styles': resolve('src/styles'),
            'api': resolve('src/api')

        }),
        addLessLoader({
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: { '@primary-color': '#A80000' },
            },
        }),
        (config) => { //暴露webpack的配置
            config.optimization.splitChunks = {
                cacheGroups: {
                    // 首先: 打包node_modules中的文件
                    vender: {
                        name: "vendor",
                        test: /[\\/]node_modules[\\/]/,
                        chunks: "all",
                        priority: 10
                    },
                    // 其次: 打包业务中公共代码
                    common: {
                        name: "common",
                        chunks: "all",
                        minSize: 1,
                        priority: 0
                    }
                },
            }
            return config
        }
    )
}
