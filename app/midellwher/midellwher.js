import { AppError, verifyToken } from "../services/authService.js"

export async function midellwher(req, res, next) {
    const {authorization} = req.headers    
    if (!authorization) throw AppError(400, "invalid Header")
    const valid = verifyToken(authorization) 
    if (!valid) throw AppError(400, "invalid Header")
    req.userId = valid._id
    console.log(valid);
        
    next()
}