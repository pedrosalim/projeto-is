
const db = require("../../config/db")

module.exports = {
    all(callback) {
        db.query(`
        SELECT *
        FROM videos
        ORDER BY videos DESC`, function(err, results) {
            if(err) throw "Database Error"

            callback(results.rows)
        })
    },
    create(data, callback) {
        const query = `
            INSERT INTO videos (
                foto_url,
                name,
                theme,
                videoname,
                description,
                university,
                linkvideo
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id 
        `

        const values = [
            data.foto_url,
            data.name,
            data.theme,
            data.videoname,
            data.description,
            data.university,
            data.linkvideo
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`SELECT * FROM videos WHERE id = $1`, [id], function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },
    findBy(filter, callback) {
        db.query(`
        SELECT *
        FROM videos
        WHERE videos.name ILIKE '%${filter}%'
        OR videos.videoname ILIKE '%${filter}%'
        OR videos.university ILIKE '%${filter}%'
        ORDER BY videos DESC`, function(err, results) {
            if(err) throw "Database Error"

            callback(results.rows)
        })
    },
    update(data, callback) {
        const query = `
            UPDATE videos SET 
                foto_url=($1),
                name=($2),
                theme=($3),
                videoname=($4),
                description=($5),
                university=($6),
                linkvideo=($7)
            WHERE id = $8    
        `

        const values = [
            data.foto_url,
            data.name,
            data.theme,
            data.videoname,
            data.description,
            data.university,
            data.linkvideo,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if(err) throw "Database Error"

            callback()
        })
    },
}