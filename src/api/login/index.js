
import axios from 'utils/ajax.js'
import global from '@/static/global'

export const LoginApi = (data = {}) => axios({
    url: global.serverName + '/admin_view/login_by_admin',
    method: 'POST',
    data
})
