const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
// const { reset } = require('nodemon')

app.use(bodyParser.urlencoded())

app.use('/admin',adminRoutes)
app.use(shopRoutes)

/**
 * adding 404 page
 */
app.use((requset,response,next)=>{
    response.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'))
})

app.listen(8080)