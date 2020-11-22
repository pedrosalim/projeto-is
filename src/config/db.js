const { Pool } = require('pg')

// module.exports = new Pool({
//     user: 'pedro',
//     password: "",
//     host: "localhost",
//     port: 5432,
//     database: "videoteste"
// })

module.exports = new Pool({
    user: 'postgres',
    password: "root",
    host: "localhost",
    port: 5432,
    database: "videoteste"
})