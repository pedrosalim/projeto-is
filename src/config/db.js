const { Pool } = require('pg')

module.exports = new Pool({
    user: 'pedrois1',
    password: "1234qwer",
    host: "mysql741.umbler.com",
    database: "videolessons"
})