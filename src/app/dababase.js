const mysql = require('mysql2')

// create connection pool
const connectionPool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'codehub',
    user: 'root',
    password: '000000',
    connectionLimit: 5,
})

//if get connection
connectionPool.getConnection((err, connection) => {
    if (err) {
        console.log('failure  ovo', err)
    }

    connection.connect((err) => {
        if (err) {
            console.log('failure aia', err)
        } else {
            console.log('success spl')
        }
    })
})
const connection = connectionPool.promise()
module.exports = connection
