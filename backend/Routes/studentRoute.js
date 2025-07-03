 import { Router } from "express";
import { addStudent } from  "../Controllers/addStudent.js";
import {checkStudent} from "../Controllers/checkStudent.js"
import {deleteStudent} from "../Controllers/deleteStudent.js"
import { getUpdateInfoStudent } from "../Controllers/getUpdateInfoStudent.js";
import { updateStudent } from "../Controllers/updateStudent.js";
import { studentUpdateVadlidation } from "../Middlewares/studentUpdateValidation.js";
const router = Router();

// Define the route for adding a student
router.post("/students/add", addStudent);   
router.get("/students/check",checkStudent)
router.delete("/students/delete/:id",deleteStudent)
router.get("/student/getinfo/:id",getUpdateInfoStudent)
router.put("/student/update/:id",studentUpdateVadlidation,updateStudent)
export default router