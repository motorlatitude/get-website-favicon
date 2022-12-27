'use strict'
const request = require('../request')
const { URL } = require('url')
const fileType = require('file-type')

module.exports =  async baseurl=>{
    let icons = []

    let url = new URL('/favicon.ico', baseurl).href
    let response = await request(url, {method:'GET', responseType: 'arraybuffer'}).catch(() => {
        return {}
    })
    let type = fileType(response.data);
    if(
        response.status == 200 &&
        /image/ig.test(type.mime)
    ){
        icons.push({
            src:url,
            sizes:'',
            type:'image/x-icon',
            origin:'/favicon.ico'
        })
    }
    return Promise.resolve(icons)
}