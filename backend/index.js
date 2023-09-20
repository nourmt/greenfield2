const mysql = require('mysql2')


const config = {
    host: 'localhost',
    user: 'root',
    password: '06082022', 
    database: 'data2'
  }

  const connection = mysql.createConnection(config)
connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("db MYSQL connected")
    }
})

module.exports=connection