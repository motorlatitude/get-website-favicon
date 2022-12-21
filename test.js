const getFavicons = require('./')
const url = process.argv[2] || 'dftba.com'
getFavicons(url).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})
