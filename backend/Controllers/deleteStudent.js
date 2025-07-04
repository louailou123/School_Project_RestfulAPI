import Student from "../Models/studentModel.js";
export const deleteStudent = async (req,res)=>{
   const  { id }=req.params

   try{
const deletedStudent = await Student.updateOne({studentId : id},{$set :{Is_Deleted:true , Deleted_At: new Date()}})
res.status(200).send('student deleted')
   }catch(err)
   {
  res.status(500).send('error happened')
   }

}