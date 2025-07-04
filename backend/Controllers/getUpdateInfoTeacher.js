import Teacher from "../Models/teacherModel.js";
export const getUpdateInfoTeacher = async (req,res)=>{
    const {id}=req.params
    try{
         const teacher =await Teacher.findOne({teacherId : id}) 
         res.status(200).json({teacher})
    }
    catch(err)
    {
        res.status(500).send(err)
    }
}