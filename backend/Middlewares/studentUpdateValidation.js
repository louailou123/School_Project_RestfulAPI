import Joi from "joi";
export const studentUpdateVadlidation = (req,res,next)=>{
const Schema = Joi.object({
            Fullname: Joi.string().min(3).required(),
            Phone_Number:Joi.required(),
            age:Joi.number().required().integer().min(1),
            Birthday: Joi.date().required(),
            Address: Joi.string().min(3).max(200).required(),
            Email: Joi.string().email().required(),
            Payement: Joi.number().positive().required()
})
const {error} =Schema.validate(req.body)
if(error){
    return res.status(400).json({message: "validation error"})
}
else{
    next()
}

}