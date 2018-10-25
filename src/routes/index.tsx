import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Bundle from './bundle'
import Home from "../views/home/home";

import Test from '../test.jsx' //测试


interface Router {
    path: string,
    component?: React.ComponentClass,
    children?: React.ComponentClass,
    exact?: boolean,
    childrens?: Router[]
}

const router: Array<Router> = [
    {
        path: '/',//首页
        component: Home,
        exact: true
    },
    {
        path: '/test',//测试页面
        component: Test,
    },
    {
        path: '/login',//登录
        component: Bundle(() => import('../views/sign/login')),
    },
    {
        path: '/register',//注册
        component: Bundle(() => import('../views/sign/register'))
    },
    {
        path: '/videos',//视频
        component: Bundle(() => import('../views/videos/video'))
    },
    {
        path: '/tool',//工具
        component: Bundle(() => import('../views/tool/tool'))
    },
]


const route = (v: Router) => <Route key={v.path} {...v}></Route>




export default class extends React.Component {
    render() {
        return (
            <Switch>
                {router.map(route)}
            </Switch >
        )
    }
}