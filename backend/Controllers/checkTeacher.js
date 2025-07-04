import Teacher from "../Models/teacherModel.js";
export const checkTeacher = async (req,res)=>{
try{
const teachers =await  Teacher.find({Is_Deleted : false})
res.status(200).json({teachers})
}catch(err){
     console.log(err)
     res.status(500).json({message : "server error"})
}


}