import {
    createStore
} from 'redux'

let states = {
    token: localStorage.getItem('token')
}
const commit = (state = states, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            localStorage.setItem('token', action.token)
            return action.token;
        default:
            return state;
    }
}

export default createStore(commit)