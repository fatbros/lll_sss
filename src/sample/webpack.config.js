const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        'entry-server': path.resolve(__dirname, 'resources/assets/js/react/entry-server.js'),
        'entry-client': path.resolve(__dirname, 'resources/assets/js/react/entry-client.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public/js/react')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    devtool: 'source-map',
    // target: 'node'
}
