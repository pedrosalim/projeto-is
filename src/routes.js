const express = require('express')
const routes = express.Router()
const videoLessons = require("./app/controllers/videos")

routes.get('/', function(req, res) {
    return res.redirect("/home")
})

routes.get('/home', videoLessons.index)
routes.get('/home/create', videoLessons.create)
routes.get('/video/:id', videoLessons.show)

routes.post('/home', videoLessons.post)

module.exports = routes