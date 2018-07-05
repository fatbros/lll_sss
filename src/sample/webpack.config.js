const path = require('path')

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
    devtool: 'source-map',
    plugins: []
}
