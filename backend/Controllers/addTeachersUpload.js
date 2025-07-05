import Teacher from "../Models/teacherModel.js";
export const addTeachersUpload = async (req,res)=>{
    const {body}=req
    try{

        body.map(async (teacher)=>await Teacher.insertOne(teacher))
    res.status(200).json({message : "teachers inserted"})
    }catch(err)
    {
        res.status(500).json({message : "error of the server"})
    }

}