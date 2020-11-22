const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(methodOverride('_method'))
// server.set('views', path.join(__dirname, "views"))
// path.resolve(__dirname,'views')
server.use(routes)

server.set("view engine", "html")

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: true,
    noCache: true
})

// console.log(__dirname + "/app/views")

server.listen(5000, function() {
    console.log("server is running")
})