var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash:8].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: 8000
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'vesground.info',
          template: path.resolve(__dirname, 'config/index.html.sample'),
          id: 'root'
        })
    ],
    devtool: 'inline-source-map',
    stats: {
        timings: true,
        colors: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    },
    watch: true,
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
};
