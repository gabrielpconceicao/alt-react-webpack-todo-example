import Express from 'express'
import ReactEngine from 'react-engine'
import path from 'path'
import { output as wp_output } from './webpack.config.js'
import routerOptions from './src/router/options.js'

export const app = new Express()
export const engine = ReactEngine.server.create( routerOptions )

app.engine( '.jsx', engine )
app.set( 'views', path.join( __dirname, 'src/page' ) )
app.set( 'view', ReactEngine.expressView )
app.set( 'view engine', 'jsx' )
app.set( 'view cache', process.env.NODE_ENV === 'production' )

app.use( wp_output.publicPath, Express.static( wp_output.path ) )
app.use( '/', ( req, res ) => res.render( req.url, {} ) )

export const server = app.listen( 3000, () => {
    let { address : host, port } = server.address()
    console.log( "server listening at http://%s:%s", host, port )
})
