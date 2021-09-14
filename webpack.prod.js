const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    entry: {
        app: `${path.resolve(__dirname, 'src')}/index.js`
    },
    output: {
        filename: 'static/js/[name].[fullhash].js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {            
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            esModule: true,
                            modules: {
                                mode: 'local',
                                exportLocalsConvention: 'camelCaseOnly',
                                namedExport: true,
                            },
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/styles.[fullhash].css'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false,
        })
    ]
});