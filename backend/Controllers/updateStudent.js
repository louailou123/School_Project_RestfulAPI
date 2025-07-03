import Student from "../Models/studentModel.js";
export const updateStudent = async (req,res)=>{
const {id} = req.params 
const {body} = req
console.log(body)
try{
    const updatedStudent = await Student.updateOne({studentId : id},{$set : {
        Fullname: body.Fullname,
        Phone_Number: body.Phone_Number,
        age: body.age,
        Birthday: body.Birthday,
        Address: body.Address,
        Email: body.Email,
        Payement: body.Payement,
        Updated_At: new Date(),
    }})
    console.log(updatedStudent)
    res.status(200).json({message:"student updated"})
}
catch(error){
   res.status(500).json({message : error})
}
  

}