import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Bundle from './bundle'
import Home from "../views/home/home";

import Test from '../test.jsx' //测试

const router = [
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
        path: '/videos',//注册
        component: Bundle(() => import('../views/videos/video'))
    }
]




export default class extends React.Component {
    render() {
        return (
            <Switch>
                {router.map(v => <Route key={v.path} {...v}></Route>)}
            </Switch >
        )
    }
}