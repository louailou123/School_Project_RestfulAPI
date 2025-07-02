 import { Router } from "express";
import { addStudent } from "../Controllers/addStudent.js";
const router = Router();

// Define the route for adding a student
router.post("/students/add", addStudent);   
export default router