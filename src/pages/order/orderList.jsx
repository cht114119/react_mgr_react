import React, { Component } from 'react'
import { message } from 'antd'

import { getMenuListApi } from 'api/home'

export default class OrderList extends Component {
    // 获取菜单列表
    async getMenuList() {
        try {
            const res = await getMenuListApi({})
            if (res) {
                if (res.code === 'A00000') {
                    message.success(res.msg)

                } else {
                    message.error(res.msg)
                }
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    componentDidMount() {
        this.getMenuList()
    }
    render() {
        return <div>OrderList页面</div>
    }
}
