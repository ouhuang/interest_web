import React, { Component } from 'react'
import { Input, Button, InputNumber, Upload, Icon, message } from 'antd'
const { TextArea } = Input;
const { Dragger } = Upload;
import './mock.css'
import * as Fetch from '../../../fetch';

interface inputObj {
    [i: string]: string,
    key: string,
    value: string,
}


interface State {
    inputList: inputObj[],
    length: number,
    text: string
}



export default class extends Component<any, any> {
    state: State = {
        inputList: [
            {
                key: '',
                value: ''
            },
            {
                key: '',
                value: ''
            },
            {
                key: '',
                value: ''
            }
        ],
        length: 1,
        text: ''
    }

    upLoad = {
        name: 'file',
        multiple: true,
        action: '/emm/mock/upload',
        onChange(info: any) {
            console.log(info)
            const status = info.file.status;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    }

    valChange(event: React.ChangeEvent<HTMLInputElement>, key: string, index: number) {
        let list = this.state.inputList
        list[index][key] = event.target.value;
        this.setState({
            inputList: list
        })
    }

    add() {
        let list = this.state.inputList
        list.push({
            key: '',
            value: ''
        })
        this.setState({
            inputList: list
        })
    }

    reset = () => {
        let inputList = this.state.inputList.map(v => ({ key: '', value: '' }))
        this.setState({ inputList })
    }

    submit() {
        Fetch.post('mock', {
            data: this.state.inputList,
            length: this.state.length
        }).then(data => {
            this.setState({
                text: JSON.stringify(data, null, 4)
            })
        })
    }

    download = () => {
        let MIME_TYPE = 'text/plain';

        let bb = new Blob([this.state.text], { type: MIME_TYPE });

        let a = document.createElement('a');
        a.download = 'demo.json';
        a.href = window.URL.createObjectURL(bb);
        a.textContent = 'Download ready';
        a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(':');
        a.click();
        a = null;
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

                <div className="mock-box">
                    <div>
                        {inputList.map((v: inputObj, k) => (
                            <div className="obj" key={k}>
                                <div>
                                    <span>Key</span>
                                    <Input value={v.key} onChange={e => this.valChange(e, 'key', k)} size="small" placeholder="请输入key" />
                                </div>
                                <div>
                                    <span>Value</span>
                                    <Input value={v.value} onChange={e => this.valChange(e, 'value', k)} size="small" placeholder="请输入value" />
                                </div>
                            </div>
                        ))}

                        <div className="btn">
                            <Button onClick={() => this.add()} size="small" block>增加一行</Button>
                        </div>

                        <div>
                            <span>数据生成数量</span> &nbsp;
                            <InputNumber value={this.state.length} onChange={e => this.setState({ length: e })} size="small"></InputNumber>
                        </div>

                        <div className="submit">
                            <Button onClick={this.reset} size="small" >重置</Button>
                            <Button onClick={() => this.submit()} size="small" type="primary">确定</Button>
                        </div>

                        <div>
                            <Dragger {...this.upLoad}>
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">点击或将文件拖拽到此处进行上传</p>
                                <p className="ant-upload-hint">上传的文件格式仅限为txt、js、json</p>
                            </Dragger>
                        </div>
                    </div>


                    <div className="textarea">
                        <TextArea value={this.state.text} autosize={{ minRows: 3, maxRows: 35 }}></TextArea>
                        <div>
                            <Button onClick={this.download}>下载数据</Button>
                        </div>
                    </div>
                </div>


            </div >

        )
    }
}