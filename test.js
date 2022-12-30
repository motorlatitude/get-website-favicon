const getFavicons = require('./')
const url = 'open.ac.uk'
getFavicons(url).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})
