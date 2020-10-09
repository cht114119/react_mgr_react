/**
 * @name 面包屑
 */

import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import BreadcrumbNameMap from './breadcrumbNameMap'
// import authToken from 'utils/auth'

const Bread = withRouter((props) => {
    // let menuList = authToken.getMenuList()
    // console.log('menuList------', menuList)
    const { location } = props
    const pathSnippets = location.pathname.split('/').filter((i) => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        return (
            <Breadcrumb.Item key={url}>
                {BreadcrumbNameMap[url].jump ? (
                    <Link to={url}>{BreadcrumbNameMap[url].name}</Link>
                ) : (
                    <span>{BreadcrumbNameMap[url].name}</span>
                )}
                {/* <Link to={url}>{BreadcrumbNameMap[url]}</Link> */}
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
