import {Router} from 'express'
import addTeacher from '../Controllers/addTeacher.js'
import teacherValidation from '../Middlewares/teacherValidation.js'
import { checkTeacher } from '../Controllers/checkTeacher.js'
import { deleteTeacher } from '../Controllers/deleteTeacher.js'
import { getUpdateInfoTeacher } from '../Controllers/getUpdateInfoTeacher.js'
import { updateTeacher } from '../Controllers/updateTeacher.js'
import multer from 'multer'
import { excelParserStudents } from '../Middlewares/excelParserStudents.js'
import { teachersUploadValidation } from '../Middlewares/teacherUploadValidation.js'
import { addTeachersUpload } from '../Controllers/addTeachersUpload.js'
const router =Router()
router.post('/teachers/add',teacherValidation,addTeacher)
router.get('/teachers/check',checkTeacher)
router.delete('/teacher/delete/:id',deleteTeacher)
router.get('/teacher/getinfo/:id',getUpdateInfoTeacher)
router.put('/teacher/update/:id',teacherValidation,updateTeacher)
const uploads=multer({dest:"uploadst/"})
router.post('/teachers/upload',uploads.single("file"),excelParserStudents,teachersUploadValidation,addTeachersUpload)
export default router