'use strict'

import queryString from 'query-string'

var request = {}


request.get = function (url, params) {
    
    if (params) {
        url += '?' + queryString.stringify(params)
    }
    console.log('request.get==> ' + url)
    return fetch(url)
        .then((response) => response.json())
}


// request.post = function (url, params) {
//     if (param) {
//         url += '?' + queryString.stringify(params)
//     }
//     return fetch('https://mywebsite.com/endpoint/', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             firstParam: 'yourValue',
//             secondParam: 'yourOtherValue',
//         })
//         .then((response) => response.json())
//     })
// }

module.exports = request