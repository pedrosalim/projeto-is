const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.use(methodOverride('_method'))
app.use(routes)

app.set("view engine", "njk")

nunjucks.configure(__dirname + "/app/views", {
    express: app,
    autoescape: true,
    noCache: true
})


app.listen(5000, function() {
    console.log("app is running")
})