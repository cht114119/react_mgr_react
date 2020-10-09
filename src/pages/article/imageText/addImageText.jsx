import React, { Component } from 'react'
import { message, Button } from 'antd'
import { getImageTextListApi } from 'api/article/imageText'

class AddImageText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchData: {
                articleName: '',
                articleStatus: '0',
                articleType: '1',
                isTrial: '',
                pageCount: 10,
                pageNum: 1,
                tagId: '',
            },
            list: [],
            count: 0,
        }
    }

    componentDidMount() {
        console.log('this--====>>>>>', this)
        // console.log('当前页面ID是 ====>>>', this.props.location.query.id)  此种方式传参 刷新页面 参数会丢失
        // console.log('当前页面ID是 ====>>>', this.props.location.state.id) // 此种方式传参 刷新页面 参数会丢失
        console.log('当前页面ID是 ====>>>', this.props.location.search) //! 此种方式传参 刷新页面 参数 不会丢失
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

    render() {
        return (
            <div>
                设置图文页面
                <div>
                    <Button>设置图文页面123 </Button>
                </div>
            </div>
        )
    }
}

export default AddImageText
