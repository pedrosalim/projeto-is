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
                name,
                foto_url,
                theme,
                videoname,
                description,
                university,
                linkvideo
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id 
        `

        const values = [
            data.name,
            data.foto_url,
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
    }
}