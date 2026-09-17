import { useState } from "react"

export function useLogin(change: {}){
        const [user, setUser] = useState({
        email: "",
        password: ""
    })

    setUser((prev) => ({...prev, ...change}))
    return user
}