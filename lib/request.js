'use strict'
const axios = require('axios').create({
    headers: {
        // 'Accept': '*/*',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, identify',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0',
        'DNT': 1,
        'Upgrade-Insecure-Requests': '1',
        'Connection': 'keep-alive',
    },
    // withCredentials: true,
    maxRedirects: 5,
    timeout: 5000
})


//TODO: add custom options, such as interceptor, be used for set proxy or rule
module.exports = async (url, options={})=>{
    options.url = url
    return await axios.request(options)
}