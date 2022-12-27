'use strict'
const {URL, parse:urlParse} = require('url')
const cheerio = require('cheerio')
const selectors = [
    "link[rel='icon' i][href]",
    "link[rel='shortcut icon' i][href]",
    "link[rel='apple-touch-icon' i][href]",
    "link[rel='apple-touch-icon-precomposed' i][href]",
    "link[rel='apple-touch-startup-image' i][href]",
    "link[rel='mask-icon' i][href]",
    "link[rel='fluid-icon' i][href]",
    "meta[name='msapplication-TileImage' i][content]",
    "meta[name='twitter:image' i][content]",
    "meta[property='og:image' i][content]"
]

module.exports =  async $=>{
    const icons = []
    
    return new Promise((resolve, reject)=>{
        try {
            $(selectors.join()).each(function(i,el){
                //console.log(el.attribs)
                let {href = '', sizes = '', type = '', content = '', rel = ''} = el.attribs
                let src = undefined
                if(el.name == 'link'){
                    src = href
                }else{
                    src = content
                }
                console.log(src)
                if(src && src !== '#'){
                    const s = new URL(src, $.url).href
                    let origin = $.html(el) ? $.html(el) : ''
                    icons.push({
                        src: s,
                        sizes,
                        type,
                        origin
                    })
                }
            })
        } catch (error) {
            // console.log(error)
        }
        resolve(icons)
    })
}