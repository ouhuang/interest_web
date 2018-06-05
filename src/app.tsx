//根模板
import * as  React from 'react';
import * as  _ from 'lodash';

import Top from './views/layout/top'
import Main from './views/layout/main'
import RouterView from './routes'

export default class extends React.Component {
    render() {
        return (
            <RouterView></RouterView>
        )
    }
}