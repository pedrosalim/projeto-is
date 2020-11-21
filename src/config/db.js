const { Pool } = require('pg')

module.exports = new Pool({
    user: 'pedrovps',
    password: "Fqv3we1785",
    host: "localhost",
    port: 5432,
    database: "videoteste"
})