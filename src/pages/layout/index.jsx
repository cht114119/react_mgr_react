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
import StaticRoute from './staticRoute'

class LayoutContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList: [],
            loading: true,
        }
    }
    componentWillMount() {
        this.getMenuList()
    }
    async getMenuList() {
        try {
            const res = await getMenuListApi({})
            // console.log('菜单列表res', res)
            if (res) {
                if (res.code === 'A00000') {
                    this.setState({
                        menuList: res.data.information,
                        loading: false,
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
            return <Redirect to="/login" />
        }
        if (this.state.loading) {
            return <div className="loading" />
        }

        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <TopHeader />
                    <Layout className="site-layout">
                        <HashRouter>
                            <LeftNav menuList={this.state.menuList} />
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
                                        {/* {staticRouteList.map((item) => {
                                            return (
                                                <Route
                                                    key={item.path}
                                                    path={item.path}
                                                    component={item.component}
                                                />
                                            )
                                        })} */}
                                        <StaticRoute />
                                        <Redirect exact from="/" to="/home" />
                                        <Redirect to="/404" />
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
