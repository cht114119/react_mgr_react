import React, { Component } from 'react'
import { message } from 'antd'
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
        // console.log('this--====>>>>>', this)
        // console.log('当前页面ID是 ====>>>', this.props.location.query.id)  // 此种方式传参 刷新页面 参数会丢失
        // console.log('当前页面ID是 ====>>>', this.props.location.state.id) // 此种方式传参 刷新页面 参数会丢失
        this.props.location.query&&this.props.location.query.id && console.log('query 传参 当前页面ID是 ====>>>', this.props.location.query.id)
        this.props.location.state&&this.props.location.state.id && console.log('state传参 当前页面ID是 ====>>>', this.props.location.state.id)
        this.props.location.search&&console.log('Link传参 当前页面ID是 ====>>>', this.props.location.search.split("?")[1]) //! 此种方式传参 刷新页面 参数 不会丢失
        this.props.location.search&&console.log('Link传参 当前页面ID是 ====>>>', this.props.location.search.replace("?",'')) //! 此种方式传参 刷新页面 参数 不会丢失
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
        return <div>设置图文页面</div>
    }
}

export default AddImageText
