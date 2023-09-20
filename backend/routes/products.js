const express = require('express')
const router = express.Router()


const {getAllProduct,addProduct,updateProduct,deleteProduct, update}=require("../controllers/products")

router.get('/getAll', getAllProduct)
router.post('/add',addProduct)
router.put('/:id',update)
router.delete("/:id",deleteProduct)




module.exports=router


