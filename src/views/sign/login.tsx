import React from 'react'
import './login.css'
import { Icon, Input, Button, Alert } from 'antd';
import * as Fetch from '../../fetch';

export default class extends React.Component {
    constructor(props: any) {
        super(props);
    }

    state: any = {
        Username: null,
        Password: null,
        errMsg: ''
    }

    login = () => {
        Fetch.post('login', this.state).then((data: any) => {
            console.log(data)
            if (data.err) {
                this.setState({ errMsg: data.msg })
            }
        })
    }

    Username = (e: any) => {
        e.preventDefault();
        this.setState({
            Username: e.target.value
        })
    }

    Password = (e: any) => {
        e.preventDefault();
        this.setState({
            Password: e.target.value
        })
    }

    render() {
        const { login, Username, Password } = this;
        return (
            <div className="login">
                <p>
                    emm 这是登录页面
                </p>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username" onChange={Username} />
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='password' onChange={Password} placeholder="Password" />

                {
                    this.state.errMsg &&
                    <Alert message={this.state.errMsg} type="error"></Alert>
                }
                <Button onClick={login}>登录</Button>
            </div>
        )
    }
}