import { Router } from "express";
import  {homeController}  from "../Controllers/home.js";
const router =Router()
router.get("/", homeController)
export default router