import Student from '../Models/studentModel.js';
import Teacher from '../Models/teacherModel.js';
export const homeController =async (req,res) =>{
    try{
                const countStudents = await Student.countDocuments({Is_Deleted : false});
                const countTeachers = await Teacher.countDocuments({Is_Deleted : false});

                // Calculate total payment
                const countPayement_s = await Student.aggregate([
                    {$match:{Is_Deleted:false}},
                    {$group:{_id:null, totalStudentPayement:{$sum:"$Payement"}}}
                ]) 
                const countPayement_t= await Teacher.aggregate([
                    {$match:{Is_Deleted:false}},
                    {$group:{_id:null,totalTeacherPayement:{$sum:"$Payement"}}}
                ])
                  const countPayementTeacher = countPayement_t.length > 0 ? countPayement_t[0].totalTeacherPayement : 0;
                  const countPayementStudent = countPayement_s.length > 0 ? countPayement_s[0].totalTeacherPayement : 0;
                const countPayement = countPayementStudent - countPayementTeacher;
                // Respond with the counts
        res.status(200).json({countStudents,countTeachers,countPayement})
    }
    catch(error){
        res.status(500).json({error: 'Server error'});
    }
}
