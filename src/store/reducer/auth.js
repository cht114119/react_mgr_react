import * as types from '../actionTypes'

let defaultAuth = {
    token: '',
    userInfo: '',
    menuList: []
}

export default function auth(state = defaultAuth, action) {
    switch (action.type) {
        case types.REMOVE_TOKEN:
            defaultAuth.token = ''
            defaultAuth.userInfo = ''
            return
        case types.SET_TOKEN:
            defaultAuth.token = action.token
            return
        case types.SET_USER_INFO:
            defaultAuth.userInfo = action.userInfo
            return
        case types.REMOVE_USER_INFO:
            defaultAuth.userInfo = ''
            return
        case types.SET_MENU_LIST:
            defaultAuth.menuList = action.action
            return
        default:
            return state
    }

}