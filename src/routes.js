const express = require('express')
const routes = express.Router()
const videoLessons = require("./app/controllers/videos")

routes.get('/', function(req, res) {
    return res.redirect("/home")
})

routes.get('/home', videoLessons.index)
routes.get('/home/create', videoLessons.create)
routes.get('/video/:id', videoLessons.show)
routes.get('/video/:id/edit', videoLessons.edit)

routes.post('/home', videoLessons.post)
routes.put('/video', videoLessons.put)


module.exports = routes