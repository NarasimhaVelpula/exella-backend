const { getBills, createBill, updateBill, deleteBill } = require('../controllers/bills')

const router=require('express').Router()
router.get('/',getBills)
router.post('/',createBill)
router.put('/:id',updateBill)
router.delete('/:id',deleteBill)

module.exports=router