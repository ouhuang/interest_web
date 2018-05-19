/**
 * 封装一下fetch
 */

let baseUrl = process.env.NODE_ENV === "production" ? "./" : "/api/";

let headers = { "Content-Type": "application/json;charset=UTF-8" };

const get = (url) => fetch(baseUrl + url, {
    headers
}).then(res => res.ok ? res.json() : console.log(res.status + res.statusText));


const post = (url, body, ...args) =>
    fetch(baseUrl + url,
        {
            body: JSON.stringify(body),
            headers,
            method: 'POST'
        })
        .then(res =>
            res.ok ? res.json() : console.log(res.status + res.statusText));

export { get, post };

export default (opt) => fetch(opt)
    .then(res => res.ok ? res.json() : console.log(res.status + res.statusText))