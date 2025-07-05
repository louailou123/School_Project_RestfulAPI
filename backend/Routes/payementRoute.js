import {Router} from 'express'
import { payements } from '../Controllers/payements.js'
const router= Router()
router.get("/payements",payements)

export default router