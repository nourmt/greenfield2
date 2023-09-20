const clients = require("../models/clients")
const crypto = require('crypto')
const saltRounds = 10
const bcrypt = require("bcrypt")
const secretKey = crypto.randomBytes(32).toString('hex')
const jwt = require('jsonwebtoken')
module.exports={
    getAllClients:function(req,res){
        clients.getAll(function(err,results){
            if(err)res.status(500).send(err)
            else res.status(200).send(results)
        })
    },


    updateClients: function(req,res){
        clients.update(function(err,results){
            if(err)res.status(500).send(err)
            else res.json(results)
        },req.body.name,req.params.id)
},



singupClients:function(req,res){
    clients.singup(req.body,function(err,results){
        if(err)res.status(500).send(err)
        else res.json(results)
    })
},



loginClients: async function(req,res){
console.log(req.body);
try {
    const email=req.body.email;
const password=req.body.password
    clients.login(email,async function(err,clients){
        if(err) res.status(500).send(err)
        if (!clients)
        res.status(401).send("Your email address or password are invalid");
      try {
        console.log(clients[0].password,"here");
       const match=  await bcrypt.compare(password, clients[0].password)
          if (match) {
            const token = jwt.sign({ email: clients[0].email }, "token");
          return res.status(200).json({ token,clients, message: 'You logged in successfully' });
          } else {
            return res.status(401).json("Invalid ");
          }
      }
      catch (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
    })
}
catch (err) {
    console.error(err);
    return res.status(500).send("An error occurred");
  }
},



deleteClients:function(req,res){
    clients.delete(function(err,results){
        if(err)res.status(500).send(err)
        else res.json(results)
    },[req.params.id])
}
}