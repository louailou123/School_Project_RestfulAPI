import Teacher from "../Models/teacherModel.js";
export const updateTeacher = async (req,res)=>{
const {id} = req.params 
const {body} = req
try{
    const updatedteacher = await Teacher.updateOne({teacherId : id},{$set : {
        Fullname: body.Fullname,
        Phone_Number: body.Phone_Number,
        age: body.age,
        Birthday: body.Birthday,
        Address: body.Address,
        Email: body.Email,
        Payement: body.Payement,
        Updated_At: new Date(),
    }})
    console.log(updatedteacher)
    res.status(200).json({message:"teacher updated"})
}
catch(error){
   res.status(500).json({message : error})
}
  

}