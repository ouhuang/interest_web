import * as React from 'react'

export default class extends React.Component<any, any> {
    componentDidMount() {
        console.log(this.props.location.pathname);
    }
    render() {
        return (
            <span>注册</span>
        )
    }
}