import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import AuthRouter from './routes/AuthRouter.js'
import { errorHendler } from './services/authService.js'

const app = express()

app.post("/",  (req,res)=>{
    req.header
})
app.use(cors())
app.use(express.json())
app.use("/users", AuthRouter)
app.use(errorHendler)
app.listen(process.env.PORT, ()=>{
    console.log("server runing");
    
})