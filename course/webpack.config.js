
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/' //Appended to links to files ending up in dist.
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '' //See : https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27
                }),
                test: /\.css$/
            },
            {
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 } //After 40k bytes, will keep the file separate.
                    },
                    'image-webpack-loader'
                ],
                test: /\.(jpe?g|giv|png|svg)$/
            },
            {
                use: [
                    'file-loader'
                ],
                test: /\.(woff|woff2|eot|ttf|otf)$/                
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'style.css'
        })
    ]
};

module.exports = config;