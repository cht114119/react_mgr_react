
import * as types from '../actionTypes'

export const setToken = (token) => ({ type: types.SET_TOKEN, token })
export const removeToken = () => ({ type: types.SET_TOKEN, token: '' })
export const setUserInfo = (userInfo) => ({ type: types.SET_TOKEN, userInfo })
export const removeUserInfo = () => ({ type: types.REMOVE_USER_INFO, userInfo: '' })
export const setMenuList = (menuList) => ({ type: types.SET_MENU_LIST, menuList })
