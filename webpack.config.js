var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        vendors: [
            'react',
            'react-dom',
            'react-tap-event-plugin',
            'redux',
            'material-ui',
            'redux-thunk'
        ],
        main: './src/app/eager.web.jsx'
    },
    output: {
        path: path.join(__dirname, 'src', 'server', 'static', 'build'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|native)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.js']
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],

    devtool: 'source-map'
};