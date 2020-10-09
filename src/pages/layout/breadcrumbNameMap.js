/**
 * @name 面包屑路由
 */
// const breadcrumbNameMap = {
//     '/home': '首页',
//     '/order/order': '订单列表',
//     '/article': '知识商品',
//     '/article/imageText': '图文'

// };
const breadcrumbNameMap ={
    '/home': {
        name:'首页',
        jump:true
    },
    '/article': {
        name:'知识商品',
        jump:false
    },
    '/article/imageText': {
        name:'图文',
        jump:true
    },
    '/article/addImageText':{
        name:'图文设置',
        jump:true
    },
    // '/404':{
    //     name:'未找到',
    //     jump:true
    // }
}
module.exports = breadcrumbNameMap;
