import Student from "../Models/studentModel.js";
import Teacher from "../Models/teacherModel.js";
import Payement from "../Models/payementModel.js";
export const payements = async (req,res)=>{
const month = new Date(Date.now())
    try{
      
        const studentPayements=await Student.aggregate([
            {$match : {Is_Deleted : false}},
            {$group : {_id:null,totalPayements:{$sum:"$Payement"}}}
        ])
                const teacherPayements=await Teacher.aggregate([
            {$match : {Is_Deleted : false}},
            {$group : {_id:null,totalPayements:{$sum:"$Payement"}}}
        ])
        const s_payement=studentPayements[0].totalPayements ||0
        const t_payement=teacherPayements[0].totalPayements ||0 
        let payementDocument =await Payement.findOne()
    
        let data =payementDocument.data
        let nan =(s_payement-t_payement)
        data[month.getMonth()]=nan || 0
        console.log(data[month.getMonth()])
        console.log(data)
             await Payement.updateOne({},{$set:{data : data}})
            res.status(200).json({data})
 
    }
    catch(error)
    {
        res.status(500).json({message : "error of the server"})
        console.log(error)
    }

}