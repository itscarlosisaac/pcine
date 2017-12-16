const webpack = require('webpack')
const path = require('path')


// Application Variables
const appName = 'app'
const entryPoint = './src/app.js'
const exportPath = path.resolve(__dirname, './dist')
const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')


// Application Plugins
const plugins = [];

module.exports = (env) => {
    const isProduction = env === 'production'
    return {
        entry: entryPoint,
        output: {
            path: exportPath,
            filename: `${appName}.bundle.js`
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: plugins,
        devtool: isProduction ? 'source-map' : 'inline-source-map',

        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            compress: true,
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'src')
        }
    }
}