import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import { Redirect } from 'react-router-dom'
import logoImg from 'assets/images/logo.jpg'
import 'styles/login/index.scss'
import { LoginApi } from '@/api/login'
import { getMenuListApi } from 'api/home'
import authToken from 'utils/auth'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
}
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sysMsg: '',
            userName: '',
            password: '',
            isLogin: false,
            menuList: [],
        }
        this.formRef = React.createRef()
    }

    // 登录按钮
    async logInBtn() {
        try {
            const res = await this.formRef.current.validateFields()
            if (res) {
                const subData = {
                    adminUserName: this.state.userName,
                    password: this.state.password,
                }
                // TODO 走接口
                this.Login(subData)
            }
        } catch (error) {
            console.log('失败', error)
        }
    }

    // 获取菜单列表
    async getMenuList() {
        try {
            const res = await getMenuListApi({})
            if (res) {
                if (res.code === 'A00000') {
                    this.setState({
                        menuList: res.data.information,
                    })
                    this.props.history.push('/')
                } else {
                    message.error(res.msg)
                }
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    // 登录
    async Login(data) {
        this.setState({
            sysMsg: '',
        })
        try {
            const res = await LoginApi(data)
            if (res && res.code === 'A00000') {
                message.success(res.msg)
                authToken.setToken(res.token)
                authToken.setUserName(res.data.information.userName)
                this.getMenuList()
                // this.props.history.push('/')

            } else {
                this.setState({
                    sysMsg: res.msg,
                })
                message.error(res.msg)
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    usernameChange(e) {
        this.setState({
            userName: e.target.value,
        })
    }
    passwordChange(e) {
        this.setState({
            password: e.target.value,
        })
    }

    // 账号校验
    validUserName = (rule, value, cb) => {
        // let valStr = value + ''
        // if (!valStr.trim()) {
        //     return Promise.reject('请输入账号')
        // }
        // if (valStr.trim().length < 5) {
        //     return Promise.reject('账号长度不得小于5位')
        // }
        // return cb()
        return Promise.resolve()
    }
    // 密码校验
    validPassword = (rule, value, cb) => {
        // let valStr = value + ''
        // if (!valStr.trim()) {
        //     return Promise.reject('请输入密码')
        // }
        // return cb()
        return Promise.resolve()
    }

    componentDidMount() {
        this.setState({
            isLogin: authToken.getToken() ? true : false,
        })
    }
    render() {
        if (this.state.isLogin) {
            return <Redirect to="/"></Redirect>
        }
        return (
            <div className="sys-login">
                <div className="login-area">
                    <div className="logo">
                        <img src={logoImg} alt="" />
                    </div>
                    <div className="form-group">
                        <Form
                            ref={this.formRef}
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                        >
                            <Form.Item
                                label="账号"
                                name="username"
                                rules={[
                                    { required: true, message: '请输入账号' },
                                    { validator: this.validUserName },
                                ]}
                            >
                                <Input
                                    type="text"
                                    placeholder="请输入账号"
                                    value={this.state.userName}
                                    onChange={(value) =>
                                        this.usernameChange(value)
                                    }
                                />
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[
                                    { required: true, message: '请输入密码' },
                                    { validator: this.validPassword },
                                ]}
                            >
                                <Input.Password
                                    placeholder="请输入密码"
                                    value={this.state.password}
                                    onChange={(value) =>
                                        this.passwordChange(value)
                                    }
                                />
                            </Form.Item>
                        </Form>
                        <Button
                            type="primary"
                            className="btn-login"
                            onClick={this.logInBtn.bind(this)}
                        >
                            登录
                        </Button>
                        {this.state.sysMsg ? (
                            <div className="err-msg">{this.state.sysMsg}</div>
                        ) : null}
                    </div>
                </div>

                <video
                    src="http://www.webhek.com/demos/video-background2/movie_1.m4v"
                    width="100%"
                    height="100%"
                    preload="auto"
                    loop
                    id="videoBg"
                ></video>
            </div>
        )
    }
}

export default Login
