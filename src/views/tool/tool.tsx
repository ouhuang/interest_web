import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Mock from './mock/mock';
import './tool.css'

export default class extends Component<{}, {}, any> {
    render() {
        return (
            <div className="gl-tool">
                <ul>
                    <li><Link to="/tool/mock"> Mock</Link></li>
                </ul>
                <div className="views">
                    <Route path="/tool/mock" component={Mock}></Route>
                </div>
            </div>
        )
    }
}