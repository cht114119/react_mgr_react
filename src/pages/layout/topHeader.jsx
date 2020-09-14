import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Button } from 'antd'
import { Redirect } from 'react-router-dom'
import { CaretDownOutlined } from '@ant-design/icons'
import authToken from 'utils/auth'
export default class TopHeader extends Component {
    state = {
        isLogin: true,
    }
    signOut() {
        this.setState({
            isLogin: false,
        })
        authToken.removeToken()
    }
    render() {
        const { Header } = Layout
        const menu = (
            <Menu>
                <Menu.Item>
                    <Button type="text" onClick={this.signOut.bind(this)}>
                        退出登录
                    </Button>
                </Menu.Item>
            </Menu>
        )
        if (!this.state.isLogin) {
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div>
                <Header className="sys-header" style={{ padding: 0 }}>
                    <h1 className="logo" style={{ color: '#fff' }}>
                        十点课堂管理系统
                    </h1>
                    <div className="userInfo">
                        <ul>
                            <li>
                                <div
                                    data-v-29234bee=""
                                    className="screen-full"
                                ></div>
                            </li>
                            <li>
                                <div className="el-dropdown">
                                    {/* <span className="user el-dropdown-selfdefine ">
                                        {authToken.getUserName()}
                                        <CaretDownOutlined />
                                    </span> */}
                                    <Dropdown
                                        overlay={menu}
                                        placement="bottomCenter"
                                        arrow
                                    >
                                        <Button
                                            type="text"
                                            style={{ color: '#fff' }}
                                        >
                                            {authToken.getUserName()}
                                            <CaretDownOutlined />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Header>
            </div>
        )
    }
}
