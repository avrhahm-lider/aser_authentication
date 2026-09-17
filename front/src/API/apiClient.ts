import { useNavigate } from "react-router"

const BASE_URL ="http://127.0.0.1:8000/users"
export async function registerApi(user: {}) {
    const res = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    if (res.ok){
        return {
            seccess: true,
        }
    }
    else return res.json()
    
}

export async function loginApi(user: {}) {
    const res = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    const result = await res.json()
    if (!res.ok){
        return {
            seccess: true,
            token: result.token
        }
    }
    else return res.json()
    
}