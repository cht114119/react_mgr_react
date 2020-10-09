import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { message, Table, Space, Button } from 'antd'
import { getImageTextListApi } from 'api/article/imageText'
import './imageText.scss'
class ImageText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchData: {
                articleName: '',
                articleStatus: '0',
                articleType: '1',
                isTrial: '',
                pageCount: 10,
                pageNum: 2,
                tagId: '',
            },
            list: [],
            count: 0,
        }
    }

    componentDidMount() {
        this.getImageTextList()
    }
    async getImageTextList() {
        try {
            let subData = Object.assign(
                {
                    articleName: '',
                    articleStatus: '0',
                    articleType: '1',
                    isTrial: '',
                    pageCount: 10,
                    pageNum: 1,
                    tagId: '',
                },
                this.state.searchData
            )
            subData.pageNum = --subData.pageNum
            const res = await getImageTextListApi(subData)
            // console.log('图文列表res', res)
            if (res && res.code === 'A00000') {
                this.setState({
                    list: res.data.information.articleList,
                    count: res.data.information.articleCount,
                })
            } else {
                message.error(res.msg)
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    jumpToDetail(id) {
        //! 此种方式传参 刷新页面 参数会丢失
        // this.props.history.push({
        //     pathname: '/article/addImageText',
        //     query: { id },
        // })

        //!此种方式传参 刷新页面  参数会丢失
        this.props.history.push({
            pathname: '/article/addImageText',
            state: { id },
        })
    }

    render() {
        const columns = [
            {
                title: '图文名称',
                dataIndex: 'article_name',
                key: 'article_name',
            },
            {
                title: '图片',
                dataIndex: 'img_url_compressed',
                key: 'img_url_compressed',
                render: (img) => (
                    <>
                        <img src={img} className="columnsImg" alt="" />
                    </>
                ),
            },
            {
                title: '浏览量',
                dataIndex: 'view_count',
                key: 'view_count',
            },
            {
                title: '上架时间',
                dataIndex: 'publish_time',
                key: 'publish_time',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button
                            onClick={this.jumpToDetail.bind(
                                this,
                                record.lesson_id
                            )}
                        >
                            编辑
                        </Button>

                        <Link to={`/article/addImageText?${record.lesson_id}`}>编辑</Link>
                        <Button>分享</Button>
                    </Space>
                ),
            },
        ]

        return (
            <div>
                <div>
                    <Link to="/article/addImageText">设置图文</Link>
                </div>
                <div>
                    <Table dataSource={this.state.list} columns={columns} />
                </div>
            </div>
        )
    }
}

export default ImageText
