var webpack = require( 'webpack' )
var path = require( 'path' )
var pkg = require( './package.json' )

module.exports = {

    entry: path.join( __dirname, '/browser.js' ),

    output: {
        path: path.join( __dirname, "build" ),
        publicPath: "/rsrcs/",
        filename: "boot.js",
        chunkFilename: "[id].chunk.js"
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            WEB_PACKED: true,
            VERSION: pkg.version,
        })
    ],

    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loader: 'babel' },
            { test: /\.split\.(react\.js|jsx)$/, loaders: [ 'babel','react-proxy' ] },
            { test: /\.json$/, loader: 'json' },

        ]
    },

    resolve: {
        modulesDirectories: [ 'node_modules' ],
        extensions: [ '', '.js', '.jsx', '.json' ]
    },
}
