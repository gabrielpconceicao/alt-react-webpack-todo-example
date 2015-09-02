import Layout from './layout/default/index.jsx'
import React, { Component } from 'react'
import { RouteHandler } from 'react-router'
import { output as wp_output } from '../webpack.config.js'

export default class App extends Component {
    render () {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <title>TODO app</title>
                </head>
                <body>
                    <Layout {...this.props}>
                        <RouteHandler {...this.props} />
                    </Layout>
                </body>
                <script src={ wp_output.publicPath + wp_output.filename } type="text/javascript"></script>
            </html>
        )
    }
}
