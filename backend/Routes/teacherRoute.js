import {Router} from 'express'
import addTeacher from '../Controllers/addTeacher.js'
import teacherValidation from '../Middlewares/teacherValidation.js'
const router =Router()
router.post('/teachers/add',teacherValidation,addTeacher)

export default router