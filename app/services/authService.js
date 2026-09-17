import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from "dotenv/config";
import z from 'zod';
console.log(process.env.SECRET_KEY);

const SALT = 10

export function createHash(password){
    return bcrypt.hashSync(password, SALT)
}

export function chakHash(hashPass, pass){
    return bcrypt.compareSync(pass, hashPass)
}

export function generateToken(user){
   return jwt.sign(user, process.env.SECRET_KEY, {expiresIn: process.env.EXPIRES_IN})
}

export function verifyToken(token){
   try {
  return jwt.verify(token, process.env.SECRET_KEY) 
} catch(err) {
  return false
}  
}
// export function wrapperError(fn){
//    fn(()=> Promise.resolve((req, res, next)).catch(next))
// }

export function AppError(statusCode, message){
    const err = new Error(message)
    err.statusCode = statusCode
    return err
}
export function validate(schema){
    return (req, res, next) =>{
    const result = schema.safeParse(
        req.body
    )

    if (!result.success){
    throw new AppError(400 ,b.error.issues[1]);
    }
    next()
}
}
export function errorHendler(err, req, res, next ){
    console.log(err);
    res.status(err.statusCode || 500)
    .json(
        {
            success: false,
            reson: err.message ? err.message : 'initial error'
        }
    )
}