import fetch from 'isomorphic-fetch';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export function post(url, data) {
    return fetch(url, {
        method: 'post',
        headers: headers,
        body: JSON.stringify(data)
    });
}

export function get(url) {
    return fetch(url, {
        method: 'get',
        headers: headers
    });
}

export default {
    post,
    get
}