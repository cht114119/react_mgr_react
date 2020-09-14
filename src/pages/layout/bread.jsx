/**
 * @name 面包屑
 */

import React from 'react'
import { HashRouter as Router, Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import BreadcrumbNameMap from './breadcrumbNameMap'

const Bread = withRouter((props) => {
    const { location } = props
    const pathSnippets = location.pathname.split('/').filter((i) => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{BreadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        )
    })
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">首页</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems)
    return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
})

export default Bread
