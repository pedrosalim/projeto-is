const Video = require("../models/Video")

module.exports = {
    index(req, res) {
        const { filter } = req.query

        if(filter) {
            Video.findBy(filter, function(videos) {
                return res.render("members/home", { videos, filter })
            })
        } else {
            Video.all(function() {
                return res.render("members/home")
            })
        }

        // return res.render("members/home", { videos })
    },
    create(req, res) {
        return res.render("members/create")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Preencha todos os campos")

            }
        }

        

        Video.create(req.body, function(video) {
            return res.redirect(`/video/${video.id}`)
        })
    },
    show(req, res) {
        Video.find(req.params.id, function(video) {
            if(!video) return res.send("Vídeo não existe!")

            return res.render("members/show", { video })
        })
    },
    edit(req, res) {
        Video.find(req.params.id, function(video) {
            if(!video) return res.send("Vídeo não existe!")

            return res.render("members/edit", { video })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Preencha todos os campos")

            }
        }

    
        Video.update(req.body, function() {
            return res.redirect(`/video/${req.body.id}`)
        })
    },
    delete(req, res){
        Video.delete(req.body.id, function() {
            return res.redirect("/home")
        })
    },
}