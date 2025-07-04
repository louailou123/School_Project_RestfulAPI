
import Teacher from "../Models/teacherModel.js";
export const deleteTeacher = async (req,res)=>{
const {id}=req.params
try
{
const deletedTeacher =await Teacher.updateOne({teacherId : id},{$set :{Deleted_At : new Date(),Is_Deleted:true}})
console.log(deletedTeacher)
res.status(200).send('teacher deleted')
}
catch(error)
{
res.status(500).json({message : "server error"})
}
}