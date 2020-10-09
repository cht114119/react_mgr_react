
import axios from 'utils/ajax.js'
import global from '@/static/global'


/**
 * 
 *  入参               
*   articleType: 1 + '', // 0 全部、1 图文、2 音频、3 视频
    articleStatus: this.statusValue,
    articleName: this.inputValue.trim(),
    pageNum: this.currentPage - 1 + '',
    pageCount: this.pageSize + '',
    tagId: this.labelValue.toString(),
    isTrial: this.isListenValue
 */
// 获取图文列表
export const getImageTextListApi = (data = {}) => axios({
    url: global.serverName + '/admin_product/get_article_list',
    method: 'POST',
    data
})
