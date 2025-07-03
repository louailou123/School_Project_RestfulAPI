import Student from "../Models/studentModel.js";
export const checkStudent = async (req,res)=>{
    try
    {
        const students = await Student.find({Is_Deleted:false})
 res.status(200).json({students})
}
 catch(err){
   res.status(500).send('error syntax')
 }

}