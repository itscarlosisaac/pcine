// Requires
const webpack = require('webpack')
const path = require('path')

// Application Variables
const appName = 'app'
const entryPoint = './src/app.js'
const exportPath = path.resolve(__dirname, './dist')
const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Application Plugins
const Plugins = [
    new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true
    })
];

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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: Plugins,
        devtool: isProduction ? 'source-map' : 'inline-source-map',

        devServer: {
            host: '0.0.0.0',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            compress: true,
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'src')
        }
    }
}