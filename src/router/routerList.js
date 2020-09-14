import NotFound from 'pages/error/404.jsx';
import Home from 'pages/home'

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
