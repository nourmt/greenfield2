const connection = require ("../index")
const crypto = require('crypto')
const saltRounds = 10
const bcrypt = require("bcrypt")
const secretKey = crypto.randomBytes(32).toString('hex')
const jwt = require('jsonwebtoken')

module.exports={

    getAll:function(callback){
    const sql='select * from Clients'
    connection.query(sql,(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   })
    },

    
    update: function(callback, client, id) {
      const sql = 'UPDATE Clients SET name =? WHERE idClients=?'
      connection.query(sql, [client, id], function (error, results) {
        callback(error, results);
      });
    },


    singup:function(client,callback){
      bcrypt.genSalt(saltRounds, (saltErr,salt) => {
        if (saltErr) {
          console.log(saltErr)
          callback(saltErr, null)
        } else {
      bcrypt.hash(client.password,salt, function(hashErr, hashedPassword){
        if (hashErr) {
          console.log(hashErr)
          callback(hashErr, null)
        } else {
          const clientData = {
            name: client.name,
            email: client.email,
            password: hashedPassword 
          }
        
        const sql="INSERT INTO `Clients` SET ?"
       connection.query(sql,clientData,(err,results)=>{
        if(err){
          console.log(err)
         callback(err,null)
        } else {
          const idClients = results.insertId
          const name = results.insertName
          const email=results.inertEmail
          const password=results.insertPassword
          token = jwt.sign({idClients ,name,email,password}, secretKey)
          callback(null, {message:token})
       }
       })
      }
    })
    }
      })
    },


      login: function (email, callback) {
          const sql=`SELECT * FROM Clients WHERE email=?`
       connection.query(sql,[email],(err,results)=>{
         callback(err,results)
        })
      },
      
      
    
    
    
    

    



    delete:function(callback,id){
    const sql='DELETE FROM Clients WHERE idClients=?'
   connection.query(sql,id,(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   })
    }


}