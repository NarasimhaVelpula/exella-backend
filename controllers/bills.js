const Bill=require('../models/ElectricityBill')

const createBill=async(req,res)=>{
    console.log("----------Bill Creation----------")
    try{
        console.log(req.body)
    const {paidDate,billDate,amount,units}=req.body
    const newBill=new Bill({
        paidDate,
        billDate,
        amount,
        units
    })
    try{
        const savedBill=await newBill.save()
        console.log(`-----------Remainder ${savedBill._id} created successfully -------------------`)
        res.status(200).send(savedBill)
    }
    catch(e){
        console.log("------------------Failed to save Bill---------------------")
        console.log(e)
        res.status(503).send("Internal Server Error")
    }
    }
    catch(e){
        console.log("------------------Failed to save Bill---------------------")
            console.log(e)
            res.status(503).send("Internal Server Error")
    }

}

const getBills=async(req,res)=>{
    console.log("---------Getting Bills---------")
    try{
        const bills=await Bill.find()
        res.status(200).send(bills)
    }
    catch(e){
        console.log("------------------Failed to send bills---------------------")
            res.status(503).send("Internal Server Error")
    }
}

const updateBill=async(req,res)=>{
    try{
        const {billId,paidDate,billDate,amount,units}=req.body
        console.log(reminderId)
        try{
            let bill=await Bill.findById(billId)
            if(bill){
                bill.paidDate=paidDate
                bill.billDate=billDate
                bill.amount=amount
                bill.units=units
                await Bill.findByIdAndUpdate(billId,bill)
                res.status(200).send(bill)
            }
            else{
                res.status(404).send("Unable to find bill")
            }
        }
        catch(e){
            console.log("---------------failed to find bill id: ",reminderId)
            console.log(e)
        }
    }
    catch(e){
        console.log("---------------------Failed to update BIll-----------")
        console.log(e)
        res.status(500).send("Failed")
    }
}

const deleteBill=async(req,res)=>{
    try{
        const {billId}=req.body
        console.log(billId)
        try{
            let bill=await Bill.findById(billId)
            if(bill){
                
                await Bill.findByIdAndDelete(billId)
                res.status(200).send("Deleted")
            }
            else{
                res.status(404).send("Unable to find bill")
            }
        }
        catch(e){
            console.log("---------------failed to find bill id: ",billId)
            console.log(e)
        }
    }
    catch(e){
        console.log("---------------------Failed to Delete BIll-----------")
        console.log(e)
        res.status(500).send("Failed")
    }
}

module.exports={createBill,updateBill,deleteBill,getBills}