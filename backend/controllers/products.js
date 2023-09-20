const product=require("../models/products")

module.exports={
getAllProduct:function(req,res){
product.getAll(function(err,results){
if(err)res.status(500).send(err)
 else res.status(200).send(results)
     })
    },



update: function (req, res) {
    const updated = {
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
    };
  
    product.update(function (err, results) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Product updated successfully', updated });
      }
    }, updated, req.params.id);
  },
  


addProduct:function(req,res){
    product.add(function(err,results){
        if(err)res.status(500).send(err)
        else res.json(results)
    },[req.body])
},


deleteProduct:function(req,res){
    product.delete(function(err,results){
        if(err)res.status(500).send(err)
        else res.json(results)
    },[req.params.id])
}


}