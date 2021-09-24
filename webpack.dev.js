const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const port = process.env.PORT || 3000;

module.exports = merge(common, {
    mode: 'development',
    entry: {
        app: `${path.resolve(__dirname, 'src')}/index.js`
    },
    output: {
        filename: '[name].[hash].js'
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
        modules: ['node_modules'],
        extensions: ['.css', '.json', '.js',],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                auto: true,
                                exportLocalsConvention: 'camelCase'
                            },
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: true,
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
    }
});