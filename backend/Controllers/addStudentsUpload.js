import Student from "../Models/studentModel.js";
export const addStudentsUpload = async (req,res)=>{
    const {body}=req
    try{

        body.map(async (student)=>await Student.insertOne(student))
    res.status(200).json({message : "students inserted"})
    }catch(err)
    {
        res.status(500).json({message : "error of the server"})
    }

}