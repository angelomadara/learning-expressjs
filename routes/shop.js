const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../util/path')

router.get('/',(request,response,next)=>{
    response.sendFile(path.join(rootDir,'express-app/views','shop.html'))
})

module.exports = router