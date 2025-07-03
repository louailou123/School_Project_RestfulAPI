import Student from "../Models/studentModel.js";
export const getUpdateInfoStudent = async (req,res)=>{
    const {id}=req.params
    try{
        console.log(id)
         const student =await Student.findOne({studentId : id}) 
         res.status(200).json({student})
    }
    catch(err)
    {
        res.status(500).send(err)
    }
}