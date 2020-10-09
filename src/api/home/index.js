
import axios from 'utils/ajax.js'
import global from '@/static/global'

export const getMenuListApi = (data = {}) => axios({
    url: global.serverName + '/admin_view/get_admin_user_menu',
    method: 'POST',
    data
})

