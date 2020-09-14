import React, { Component } from 'react'
import { Layout, message } from 'antd'
import Breadcrumb from './bread'
import {
    Redirect,
    withRouter,
    HashRouter,
    Switch,
    Route,
} from 'react-router-dom'
import { getMenuListApi } from 'api/home'

import authToken from 'utils/auth'
import LeftNav from 'pages/layout/leftNav'
import TopHeader from 'pages/layout/topHeader'

import Home from '@/pages/home'
import OrderList from 'pages/order/orderList'

class LayoutContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList: [],
        }
    }
    componentWillMount() {
        this.getMenuList()
    }
    async getMenuList() {
        try {
            const res = await getMenuListApi({})
            console.log('菜单列表res', res)
            if (res) {
                if (res.code === 'A00000') {
                    this.setState({
                        menuList: res.data.information,
                    })
                } else {
                    message.error(res.msg)
                }
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    render() {
        const { Content } = Layout
        if (!authToken.getToken()) {
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <TopHeader></TopHeader>
                    <Layout className="site-layout">
                        <HashRouter>
                            <LeftNav menuList={this.state.menuList}></LeftNav>
                            <Content style={{ margin: '0 16px' }}>
                                <Breadcrumb> </Breadcrumb>
                                <div
                                    className="site-layout-background"
                                    style={{ padding: 24, minHeight: 360 }}
                                >
                                    <Switch>
                                        <Route
                                            path="/home"
                                            exact
                                            component={Home}
                                        />
                                        <Route
                                            path="/order/order"
                                            component={OrderList}
                                        />
                                        <Redirect
                                            exact
                                            from="/"
                                            to="/home"
                                        ></Redirect>
                                        <Redirect to="/404"></Redirect>
                                    </Switch>
                                </div>
                            </Content>
                        </HashRouter>
                    </Layout>
                    {/* <Footer style={{ textAlign: 'center',fontSize:'20px' }}>
                        十点课堂管理系统
                    </Footer> */}
                </Layout>
            </div>
        )
    }
}
const LayoutWarp = withRouter(LayoutContainer)
export default LayoutWarp

// export default LayoutContainer
