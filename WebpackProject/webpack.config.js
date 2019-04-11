
const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    "faker",
    "lodash",
    "react",
    "react-dom",
    "react-input-range",
    "react-redux",
    "react-router",
    "redux",
    "redux-form",
    "redux-thunk"
];

module.exports = {
    entry: {
        index: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[chunkhash]-bundle.js' // [name] webpack changes it for the property name of entry point.
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/,
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'] //Manifest tells more information about vendor dependencies bineg updated
        }),
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
