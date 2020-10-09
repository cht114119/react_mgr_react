import NotFound from 'pages/error/404.jsx';
import Home from 'pages/home'
// import ImageText from 'pages/article/imageText';
// import AddImageText from 'pages/article/imageText/addImageText';

export const routerList = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/404',
        component: NotFound
    },
];
