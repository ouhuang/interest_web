/**
 * 封装一下fetch
 */
import store from '../store';

let baseUrl = "/emm/";  //本地webpack转发，线上nginx转发

let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Authorization": store.getState()
};

const get = (url: string) => fetch(baseUrl + url, {
    headers
}).then(res => res.ok ? res.json() : console.log(res.status + res.statusText));


const post = (url: string, body?: object) =>
    fetch(baseUrl + url,
        {
            body: JSON.stringify(body),
            headers,
            method: 'POST'
        })
        .then(res =>
            res.ok ? response(res) : console.log(res.status + res.statusText));

const response = (res: any) => {
    let token = res.headers.get('authorization')
    if (token) store.dispatch({ type: 'SET_TOKEN', token })

    return res.json()
}

export { get, post };