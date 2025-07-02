import Teacher from "../Models/teacherModel.js"

const addTeacher = async (req,res)=>{
const {Fullname,Phone_Number,age,Birthday,Address,Email,Payement} = req.body
try{
const newTeacher = new Teacher({
    Fullname,
    Phone_Number,
    age,
    Birthday,
    Address,
    Email,
    Payement
})
 const savedTeacher = await newTeacher.save()
 console.log(savedTeacher) 
    res.status(201).json({message:"Teacher added successfully",teacher:savedTeacher})
}
catch(err){
    console.error('Error adding teacher:', err);
    res.status(500).json({error: 'Internal server error'});
}
}

export default addTeacher