import * as React from 'react'

import RouterView from '../../routes'

const style = {
    width: '13.8rem',
    padding: '.1rem',
    margin: '.2rem auto'
}

export default class extends React.Component {
    render() {
        return (
            <main style={style}>
                <RouterView />
            </main>
        )
    }
}