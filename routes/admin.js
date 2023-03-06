const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../util/path')

router.get('/add-product',(request,response,next)=>{
    response.sendFile(path.join(rootDir,'express-app/views','add-product.html'))
})

router.post('/add-product',(request,response)=>{
    console.log(request.body)
    response.redirect('/');
})

module.exports = router