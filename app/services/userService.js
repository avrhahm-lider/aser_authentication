
import userDal from '../DAL/userDal.js'
import { AppError, chakHash, createHash, generateToken, verifyToken } from './authService.js'



async function register(user) {
    const exsistUser = await userDal.getUserByEmail(user.email)
    
    if (exsistUser) throw AppError(409, "user alrady exsists")
    user.passHash = createHash(user.password)
    return userDal.createUser(user)
}

async function login(login) {
    const exsistUser = await userDal.getUserByEmail(login.email)
    if (!exsistUser) throw AppError(404, "user not found")
    const valid = chakHash(exsistUser.passHash, login.password ) 
    if (!valid) throw AppError(400, "Incorrect username or password")
    return generateToken(getUserObjFilterd(exsistUser))   
}

async function me(id) {
    const exsistUser = await userDal.getUserByID(id)
    if (!exsistUser) throw AppError(404, "user not found")
    return  {name: exsistUser.name, email: exsistUser.email}
}
function getUserObjFilterd(user){
    return{
        id: user._id,
        name: user.name,
        email: user.email
    }
}
export default {register, login, me}