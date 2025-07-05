import Joi from "joi";

export const studentsUploadValidation = (req, res, next) => {
    const studentSchema = Joi.object({
        Fullname: Joi.string().min(3).required(),
        Phone_Number: Joi.required(),
        age: Joi.number().required().integer().min(1),
        Birthday: Joi.date().required(),
        Address: Joi.string().min(3).max(200).required(),
        Email: Joi.string().email().required(),
        Payement: Joi.number().positive().required()
    });

    // Expecting req.body to be an array of students
    const schema = Joi.array().items(studentSchema);

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next(); 
};