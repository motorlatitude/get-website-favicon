const getFavicons = require('./')
const url = 'dftba.com'
getFavicons(url).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})
