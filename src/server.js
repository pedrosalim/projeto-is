const express = require('express')
// const path = require('path')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const app = express()

app.use(express.urlencoded({ extended: true }))
// app.use(express.static("public"))
app.use(express.static(__dirname + "public", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));
// app.use('/static', express.static('./public'));
app.use(methodOverride('_method'))
// app.set('views', path.join(__dirname, "views"))
// path.resolve(__dirname,'views')
app.use(routes)

app.set("view engine", "njk")

nunjucks.configure(__dirname + "/app/views", {
    express: app,
    autoescape: true,
    noCache: true
})

// console.log(__dirname + "/app/views")

app.listen(5000, function() {
    console.log("app is running")
})