const { Pool } = require('pg')

module.exports = new Pool({
    user: 'pedrois1',
    password: "1234qwer",
    host: "mysql741.umbler.com",
    port: 5432,
    database: "videolessons"
})