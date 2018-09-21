//根模板
import * as  React from 'react';

import Top from './views/layout/top'
import Main from './views/layout/main'

export default class extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <Main />
            </div >
        )
    }
}