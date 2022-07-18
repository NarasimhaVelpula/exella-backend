const mongoose=require('mongoose')

const BillSchema=mongoose.Schema({
    billDate:{
        type: Date,
        required: true,
        max: Date.now()
    },
    paidDate:{
        type: Date,
        required: true,
        max: Date.now()
    },
    amount:{
        type: String,
        required: true
    },
    units:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Bill',BillSchema)