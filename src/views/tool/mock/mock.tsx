import React, { Component } from 'react'
import { Input } from 'antd'
import './mock.css'

interface inputObj {
    key: string,
    value: string
}

export default class extends Component<any, any> {
    constructor(props: object) {
        super(props)
        this.state = {
            inputList: [
                {
                    key: '',
                    value: ''
                }
            ]
        }
    }

    valChange(event: React.ChangeEvent) {
        console.log(event)
    }

    render() {
        const {
            inputList
        } = this.state
        return (
            <div className="gl-mock">
                <p>
                    <span>使用mockjs制作模拟数据</span>
                    <br />
                    文档地址 &nbsp;
                <a href="https://github.com/nuysoft/Mock/wiki" target="_blank">https://github.com/nuysoft/Mock/wiki</a>
                </p>

                {inputList.map((v: inputObj) => (
                    <div className="obj">
                        <div>
                            <span>Key</span>
                            <Input value={v.key} onChange={this.valChange} size="small" placeholder="请输入key" />
                        </div>
                        <div>
                            <span>Value</span>
                            <Input size="small" placeholder="请输入value" />
                        </div>
                    </div>
                ))}
            </div>

        )
    }
}