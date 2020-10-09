import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import './leftNav.scss';
class LeftNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList: [],
        }
    }

    // map 方法获取菜单列表
    getMeunNodes(menuList) {
        return menuList.map((item) => {
            if (item.adminMenuStatus === 1) {
                if (!item.childAdminMenuList) {
                    return (
                        <Menu.Item key={item.adminMenuId}>
                            {item.adminMenuName}
                            <Link to={item.url} />
                        </Menu.Item>
                    )
                } else {
                    return (
                        <Menu.SubMenu
                            key={item.adminMenuId}
                            title={item.adminMenuName}
                        >
                            {this.getMeunNodes(item.childAdminMenuList)}
                        </Menu.SubMenu>
                    )
                }
            } else {
                return null
            }
        })
    }

    // reduce 方法获取菜单列表
    getMeunNodes2(menuList) {
        return menuList.reduce((pre, item) => {
            if (item.adminMenuStatus === 1) {
                if (!item.childAdminMenuList) {
                    pre.push(
                        <Menu.Item key={item.adminMenuId}>
                            {item.adminMenuName}
                            <Link to={item.url} />
                        </Menu.Item>
                    )
                } else {
                    pre.push(
                        <Menu.SubMenu
                            key={item.adminMenuId}
                            title={item.adminMenuName}
                        >
                            {this.getMeunNodes2(item.childAdminMenuList)}
                        </Menu.SubMenu>
                    )
                }
            }
            return pre
        }, [])
    }

    render() {
        const { Sider } = Layout
        return (
            <div className="left-nav">
                <Sider>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['/home']}
                        mode="inline"
                    >
                        {this.getMeunNodes(this.props.menuList)}
                    </Menu>
                </Sider>
            </div>
        )
    }
}

export default LeftNav
