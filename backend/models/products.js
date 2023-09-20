const connection = require ("../index")

module.exports={
 getAll:function(callback){
 const sql='select * from Product'
 connection.query(sql,(err,results)=>{
if(err) console.log(err)
else callback(err,results)
 })
 },




update: function (callback, product, id) {
  const sql = 'UPDATE Product SET name = ?, description = ?, price = ?, image= ? WHERE idProduct = ?';
  const values = [product.name, product.description, product.price,product.image, id];

  connection.query(sql, values, function (error, results) {
    callback(error, results);
  });
},








 add:function(callback,Data2){
    const sql="INSERT INTO  `Product` SET ?"
    connection.query(sql,Data2,(err,results)=>{
     if(err) console.log(err)
     else callback(err,results)
    })
 },
 

 delete:function(callback,id){
    const sql='DELETE FROM Product WHERE idProduct=?'
   connection.query(sql,id,(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   })
    }

    
}