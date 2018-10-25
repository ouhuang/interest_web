import * as React from 'react'

import RouterView from '../../routes'



export default class extends React.Component {
    render() {
        return (
            <main style={{ 'padding': '1rem' }}>
                <RouterView />
            </main>
        )
    }
}