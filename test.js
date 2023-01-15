const getFavicons = require('./')
const url = 'petsathome.com'
getFavicons(url).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})
