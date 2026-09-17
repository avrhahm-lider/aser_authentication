import {Router} from 'express'
import userControlers from '../controlers/userControlers.js'
import { validate } from '../services/authService.js'
import { LoginType, RegisterType } from '../module/moduls.js'
import { midellwher } from '../midellwher/midellwher.js'

const router = Router()

router.post("/register",validate(RegisterType) ,userControlers.register)

router.post("/login",validate(LoginType) ,userControlers.login)
router.get("/me",midellwher ,userControlers.me)

export default router