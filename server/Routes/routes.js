import express from 'express'
import { login, logOut, signUp } from '../Controller/UserController.js'

const router=express.Router()

router.post('/signUp',signUp)
router.post('/login',login)
router.post('/logout',logOut)

export default router