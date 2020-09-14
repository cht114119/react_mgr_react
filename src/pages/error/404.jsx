import React, { Component } from 'react'
import notFound from 'assets/images/404.png'
import './404.less'
export default class NotFound extends Component {
    render() {
        return (
            <div className="notFound">
                <img src={notFound} className="notFoundIcon" alt="not found" />
                <p className="tips">我们也迷路了，找不到这个页面</p>
            </div>
        )
    }
}
