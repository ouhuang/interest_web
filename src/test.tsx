import _ from 'lodash'
import React from 'react'

export interface HelloProps {
    compiler: string;
    framework: string;
}

export default (props: HelloProps) => <p> {_.join(['这', '是测试'], '') + props.compiler}</p>
