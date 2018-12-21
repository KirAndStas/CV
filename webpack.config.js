var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'dist/builds'),
        filename: '[name].[chunkhash:8].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/builds'),
        port: 8000
    },
    plugins: [
        new CleanWebpackPlugin('dist/builds/*', {}),
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
        extensions: ['.js', '.jsx', '.less'],
        alias: {
            config: path.resolve(__dirname, 'config'),
            src: path.resolve(__dirname, 'src')
        }
    },
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
