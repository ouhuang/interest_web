import React from 'react'
import './login.css'
import { Form, Icon, Input, Button, Alert } from 'antd';
import { FormComponentProps } from 'antd/lib/form';


import * as Fetch from '../../fetch';

const FormItem = Form.Item;

interface Params {
    [name: string]: string
}

interface State {
    params: Params,
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

    inputList = [
        {
            name: 'userName',
            type: 'user',
            placeholder: '用户名',
            rules: [
                { required: true, message: '用户名不能为空' },
                { type: 'string', min: 2, message: '用户名长度不能小于2位' },
                { type: 'string', max: 12, message: '用户名长度不能大于12位' }
            ]
        },
        {
            name: 'loginName',
            type: 'unlock',
            placeholder: '账号',
            rules: [
                { required: true, message: '账号不能为空' },
                { type: 'string', min: 2, message: '账号长度不能小于2位' },
                { type: 'string', max: 12, message: '账号长度不能大于12位' }
            ]
        },
        {
            name: 'passWord',
            type: 'lock',
            placeholder: '密码',
            rules: [
                { required: true, message: '密码不能为空' },
                { type: 'string', min: 6, message: '密码长度不能小于6位' },
                { type: 'string', max: 24, message: '密码长度不能大于24位' }
            ]
        },
        {
            name: 'email',
            type: 'mail',
            placeholder: '邮箱',
            rules: [
                { required: true, message: '邮箱不能为空' },
                { type: 'email', message: '邮箱格式错误' }
            ]
        },
    ]

    handleSubmit = () => {

    }
    model = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        this.setState({
            params: {
                ...this.state.params,
                [key]: e.target.value
            }
        })
    }
    register = () => {
        console.log(this.state.params)
        // Fetch.post('register', this.state.params).then(data => {
        //     this.setState({ msg: data.msg })
        // })
    }
    render() {
        const { model, register, inputList } = this;
        const { msg, params } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="register">
                < Form layout="inline">
                    <p>
                        emm 这是注册页面
                    </p>

                    {
                        inputList.map(({ name, rules, placeholder, type }) => (
                            <FormItem key={name} label={placeholder}>
                                {
                                    getFieldDecorator(name, { rules })(
                                        <Input prefix={<Icon type={type} style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder={placeholder} onChange={e => model(e, name)} />
                                    )
                                }
                            </FormItem>
                        ))
                    }
                    <br />
                    <FormItem>
                        <Button type="primary">注册</Button>
                    </FormItem>
                    {
                        msg &&
                        <Alert
                            message={msg}
                            type="error"
                            closable
                        />
                    }

                </Form >
            </div>

        )
    }
}


export default Form.create()(RegistrationForm);