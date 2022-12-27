'use strict'
const { URL } = require('url')
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

    $(selectors.join()).each(function(i,el){
        let {href = '', sizes = '', type = '', content = ''} = el.attribs
        let src = undefined
        if(el.name == 'link'){
            src = href
        }else{
            src = content
        }
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
    return Promise.resolve(icons)
}