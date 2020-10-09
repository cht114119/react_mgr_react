import Home from 'pages/home';
import ImageText from 'pages/article/imageText';
import AddImageText from 'pages/article/imageText/addImageText';
const staticRouteList = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/article/imageText',
        component: ImageText
    },
    {
        path: '/article/addImageText',
        component: AddImageText
    },
    // {
    //     path: '/article/addImageText/:id',   // Link 跳转路由 明文传参方式   参见 /src/pages/article/imageText/index.jsx  <Link to={`/article/addImageText/${record.lesson_id}`}>编辑</Link> 
    //     component: AddImageText
    // },
]
export default staticRouteList