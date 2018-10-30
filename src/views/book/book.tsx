import React from 'react';
import { Input } from 'antd';
import './book.css';
import * as Fetch from '../../fetch'

interface State {
    bookList: []
}

export default class extends React.Component {
    state: State = {
        bookList: []
    }

    componentDidMount() {
        Fetch.get('book/list')
    }
    render() {
        return (
            <div className="gl-book">
                <div>
                    <Input ></Input>
                </div>
                <div>
                    emm 爬过的电子书列表
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}