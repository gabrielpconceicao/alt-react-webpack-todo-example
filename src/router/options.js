import routes from './routes.jsx'
import path from 'path'

export default {
    routes: routes,
    routesFilePath: path.join( __dirname, 'routes.jsx' ),
    viewResolver: ( viewName ) => 
        require( '../page/' + viewName )
}
