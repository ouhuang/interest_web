import React from 'react'
import './login.css'
import { Icon, Input, Button, Alert } from 'antd';
import * as Fetch from '../../fetch';



export default class extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            params: {
                userName: '',
                loginName: '',
                passWord: '',
                email: ''
            },
            msg: ''
        }
    }
    model = (e?: any) => {
        let key = e.target.attributes['data-model'].value;
        this.setState({
            params: {
                ...this.state.params,
                [key]: e.target.value
            }
        })
    }
    register = () => {
        Fetch.post('register', this.state.params).then(data => {
            this.setState({ msg: data.mag })
        })
    }
    focus = (e: any) => {
        console.log(e.target.type = 'password');
    }
    render() {
        const { model, register, focus } = this;
        const { msg } = this.state;
        return (
            < div className="register">
                <p>
                    emm 这是注册页面
                </p>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名" onChange={model} data-model="userName" />
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='text' onChange={model} placeholder="账号" data-model="loginName" />
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='text' autocomplete='off' onChange={model} placeholder="密码" data-model="passWord" />
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='text' onChange={model} placeholder="邮箱" data-model="email" />
                {msg &&
                    <Alert
                        message="Error Text"
                        description={msg}
                        type="error"
                        closable
                    />}
                <Button onClick={register}>注册</Button>

            </div >
        )
    }
}