//根模板
import * as  React from 'react';
import * as  _ from 'lodash';
import { Router, Route } from 'react-router';

import Top from './views/layout/Top'
import Main from './views/layout/Main'


export default class extends React.Component {
    render() {
        return <div>
            <Top></Top>
            <Main></Main>
        </div>
    }
}