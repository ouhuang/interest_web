/**
 * 封装一下fetch
 */

let baseUrl = "/api/";  //本地webpack转发，线上nginx转发

let headers = { "Content-Type": "application/json;charset=UTF-8" };

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
            res.ok ? res.json() : console.log(res.status + res.statusText));

export { get, post };