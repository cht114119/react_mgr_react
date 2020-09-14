/**
 * axios全局配置
 */
// import store from '@/store'

import axios from 'axios'
import { message } from 'antd'
import md5 from 'md5'
import authToken from 'utils/auth.js';
var requestList = [];

/**
 * @description 验签
 * @param data 请求数据
 * @author Jason
 */

let inspectionSign = (data) => {
    try {
        let sign = '';
        data.time = new Date().getTime();
        Object.keys(data).sort().map(v => {
            if (typeof data[v] === 'object') {
                sign += JSON.stringify(data[v]);
            } else if (typeof data[v] !== 'undefined') {
                sign += data[v]
            }
        });
        sign += 'sd_secret';
        sign = md5(sign).toUpperCase();
        return {
            ...data,
            sign
        }
    } catch (e) {
        throw new Error(e)
    }
};
// 超时设置
const service = axios.create({
    //baseURL :'http://192.168.1.202:8081',
    // baseURL :'http://192.168.1.159:8080',
    timeout: 60000, // 请求超时时间
    //withCredentials : true,

});

//允许携带cookie
//axios.defaults.withCredentials = true
// http request 拦截器
// 每次请求都为http头增加Authorization字段，其内容为token
service.interceptors.request.use(
    config => {
        //TODO !需要设置headers
        config.headers.common['Shidian-Auth-Token'] = authToken.getToken() + '';
        if (config.method != "get") {
            config.data = inspectionSign(config.data);
        }
        return config
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
// 针对响应代码确认跳转到对应页面
service.interceptors.response.use(
    response => {
        for (let i = 0; i < requestList.length; i++) {
            if (requestList[i] == response.config.url) {
                // 注意，不能保证500ms必定执行，详情请了解JS的异步机制
                // setTimeout(function(){
                //     requestList.splice(i,1)
                // }, 500)
                requestList.splice(i, 1)
                break
            }
        }
        // return Promise.resolve(response.data)
        if (response.data.code === 'B00003' || response.data.code === 'C00008') {
            message.error('您的账户在它端登录,请重新登陆')
            //TODO 需要登出操作
            authToken.removeToken()
            window.location.href = window.location.origin + '#/login'
        } else {
            if (response.headers['content-disposition']) {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response.data)
            }
        }
    },
    error => {
        if (axios.isCancel(error)) {
            return Promise.reject("Ajax Abort: 该请求在axios拦截器中被中断" + error)
        } else if (error.response) {
            switch (error.response.status) {
                case 401:
                // todo 需要跳到 401页面
                window.location.href = window.location.origin + '#/401'
                case 403:
                // todo 需要跳到 403页面
                window.location.href = window.location.origin + '#/403'
                default:
                    message.error(`服务器错误！错误代码：${error.response.status}`)
            }
            return Promise.reject(error.response.data)
        }
        return Promise.reject(error.toString())
    }
);
export default service;
