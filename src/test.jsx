import React, { Component } from 'react'


export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div >
            {this.props.tip}
        </div>
    }
}