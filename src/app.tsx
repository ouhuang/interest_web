//根模板
import * as  React from 'react';
import * as  _ from 'lodash';

import Top from './views/layout/Top'
import Main from './views/layout/Main'
import RouterView from './routes/index'


export default class extends React.Component {
    render() {
        return (
            <RouterView></RouterView>
        )
    }
}