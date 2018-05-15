import * as React from "react";
import * as _ from 'lodash'

export interface HelloProps {
    compiler: string;
    framework: string;
}
export default (props: HelloProps) => <p> {_.join(['这', '是测试'], '') + props.compiler}</p>
