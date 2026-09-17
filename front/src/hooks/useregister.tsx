import { useState } from "react"

export function useRegister(change?: {}){
        const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    if (change)
    setUser((prev) => ({...prev, ...change}))
    return user
}

