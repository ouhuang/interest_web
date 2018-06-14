import React from 'react'
import './login.css'
import { Form, Icon, Input, Button, Alert } from 'antd';
import { FormComponentProps } from 'antd/lib/form';


import * as Fetch from '../../fetch';

const FormItem = Form.Item;


interface State {
    params: object,
    msg: string,
    confirmDirty: boolean,
    autoCompleteResult: any[]
}
class RegistrationForm extends React.Component<FormComponentProps, any> {
    state: State = {
        params: {
            userName: '',
            loginName: '',
            passWord: '',
            email: ''
        },
        msg: '',
        confirmDirty: false,
        autoCompleteResult: []
    }
    handleSubmit = () => {

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
            this.setState({ msg: data.msg })
        })
    }
    focus = (e: any) => {
        console.log(e.target.type = 'password');
    }
    render() {
        const { model, register, focus } = this;
        const { msg } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            < Form layout="inline" className="register" onSubmit={this.handleSubmit}>
                <p>
                    emm 这是注册页面
                </p>

                <FormItem>
                    {
                        getFieldDecorator('user', {
                            rules: [
                                { required: true, message: '用户名不能为空' },
                                { type: 'string', min: 2, message: '用户名长度不能小于2位' },
                                { type: 'string', max: 12, message: '用户名长度不能大于12位' }
                            ]
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名" onChange={model} data-model="userName" />
                        )
                    }
                </FormItem>

                <FormItem>
                    {
                        getFieldDecorator('lock', {
                            rules: [
                                { required: true, message: '账号不能为空' },
                                { type: 'string', min: 2, message: '账号长度不能小于2位' },
                                { type: 'string', max: 12, message: '账号长度不能大于12位' }
                            ]
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type='text' onChange={model} placeholder="账号" data-model="loginName" />
                        )
                    }
                </FormItem>



                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='text' data-autocomplete='off' onChange={model} placeholder="密码" data-model="passWord" />
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='text' onChange={model} placeholder="邮箱" data-model="email" />
                {
                    msg &&
                    <Alert
                        message={msg}
                        type="error"
                        closable
                    />
                }
                <Button type="primary">注册</Button>

            </Form >
        )
    }
}


export default Form.create()(RegistrationForm);