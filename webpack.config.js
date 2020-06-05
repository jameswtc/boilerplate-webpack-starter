const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        before(app, server) {
            server._watch('src/**/*');
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};

