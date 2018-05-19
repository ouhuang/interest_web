import './css/top.css'
import * as React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
    render() {
        return (
            <div className="top">
                <span><Link to='/login'>登陆</Link> </span>
                <span><Link to='/register'>注册</Link></span>
            </div>
        )
    }
}