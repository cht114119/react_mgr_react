import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import staticRouteList from '../../router/staticRouteList'
class StaticRoute extends Component {
    render() {
        return staticRouteList.map((item) => {
            return (
                <Route
                    key={item.path}
                    path={item.path}
                    component={item.component}
                />
            )
        })
    }
}
export default StaticRoute
