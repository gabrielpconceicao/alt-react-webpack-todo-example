import React from 'react'
import { Route, DefaultRoute, NotFoundRoute } from 'react-router'

export default (
    <Route path="/" handler={require('../App.jsx')}>
        <DefaultRoute handler={require('../page/Todos.jsx')} />
        <NotFoundRoute handler={require('../page/error/NotFound.jsx')} />
    </Route>
)
