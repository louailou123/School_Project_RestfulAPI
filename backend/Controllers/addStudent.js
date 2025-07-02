import Joi from 'joi';
import Student from '../Models/studentModel.js';
export const addStudent = async (req, res) => {
            // Define the schema
    const schema = Joi.object({
        Fullname: Joi.string().min(3).max(100).required(),
        Phone_Number: Joi.required(),
        age: Joi.number().integer().min(1).required(),
        Birthday: Joi.date().required(),
        Address: Joi.string().min(3).max(200).required(),
        Email: Joi.string().email().required(),
        Payement: Joi.number().positive().required()
    });
   const { error } = schema.validate(req.body);
   if(error) {
        return res.status(400).message('error of validation').json({ error: error.details[0].message });

    }
    else {
        try{
                    // If validation passes, proceed with adding the student
        const { Fullname, Phone_Number, age, Birthday, Address, Email, Payement } = req.body;
        const newStudent = new Student({
            Fullname,
            Phone_Number,
            age,
            Birthday,
            Address,
            Email,
            Payement
        }); 
        const savedStudent = await newStudent.save();
console.log('Saved student:', savedStudent);
        // Respond with success message
        
        res.status(201).json({ message: 'Student added successfully' });
        }
        catch (error) {
            console.error('Error adding student:', error);
            res.status(500).json({ error: 'Internal server error' });
        }

    }
}