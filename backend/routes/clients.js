const express = require('express')
const router = express.Router()

const {getAllClients,singupClients,updateClients,deleteClients,loginClients}=require("../controllers/clients")

router.get('/getAll', getAllClients)
router.post('/add',singupClients)
router.post('/login',loginClients)
router.put('/:id',updateClients)
router.delete("/:id",deleteClients)




module.exports=router