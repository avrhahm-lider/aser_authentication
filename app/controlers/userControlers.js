import userService from "../services/userService.js";
async function register(req, res) {
    const result = await userService.register(req.body)
    res.status(201).json(result)
}

async function login(req, res) {
    const result = await userService.login(req.body)
    res.status(201).json({token: result})
}

async function me(req, res) {
    const result = await userService.me(req.userId)
    res.status(200).json(result)
}

export default {register, login, me}