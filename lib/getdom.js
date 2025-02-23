'use strict'
const request = require('./request')
const cheerio = require('cheerio')
const { parse: urlParse } = require('url')
module.exports =  async url=>{
    try {
        let response = await request(url);
        // console.log(response.status,response.statusText);
        let html = response.data;
        let $ = cheerio.load(html,{
            lowerCaseTags: true,
            lowerCaseAttributeNames: true,
        })
        $.url = response.request.res.responseUrl;
        $.baseUrl = urlParse($.url).protocol+'//'+urlParse($.url).hostname;
        return Promise.resolve($);
    } catch (error) {
        console.log(error)
        let $ = cheerio.load("");
        $.url = url;
        $.baseUrl = urlParse($.url).protocol+'//'+urlParse($.url).hostname;
        return Promise.resolve($)
    }
}