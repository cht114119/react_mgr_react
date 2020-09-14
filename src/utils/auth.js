import Cookies from 'js-cookie'

const authToken = {
    // 在Cookie中记录登录状态的key
    loginKey: 'isLogin',

    // 获取token
    getToken() {
        console.log('sdToken', Cookies.get('sdToken'));
        return Cookies.get('sdToken')
    },



    // 当前是否是登录状态
    isLogin() {
        return Cookies.get(this.loginKey)
    },

    // 设置Token
    setToken(token) {
        Cookies.set('sdToken', token)
    },

    // 设置登录状态
    setLoginStatus() {
        // 设置超时登录时间，在该时间范围内没有任何请求操作则自动删除
        // var maxAge = new Date(new Date().getTime() + 1 * 60 * 1000)
        Cookies.set(this.loginKey, 'true')
    },

    // 移除Token
    removeToken() {
        Cookies.remove('sdToken')
    },

    // 移除登录状态
    removeLoginStatus() {
        Cookies.remove(this.loginKey)
    },

    // 存储用户名
    setUserName(kt_userName) {
        Cookies.set('kt_userName', kt_userName)
    },

    // 获取用户名
    getUserName() {
        return Cookies.get('kt_userName')
    },
}

export default authToken
