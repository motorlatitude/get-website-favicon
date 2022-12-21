const getFavicons = require('./')
const url = process.argv[2] || 'dev.to'
getFavicons(url).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})
