import { useState } from "react"
import {create} from 'zustand'

interface Login {
        email: string,
        password: string
    }

interface LoginStoreType {
    login : Login,
    setEnail : (c: string) => void
    setPassWord : (c: string) => void
}

export const loginStore = create<LoginStoreType>()((set) => ({
    login : { email: "",password: ""},
    setEnail : (c) => set((s) => ({login: {...s.login, email:c} })) ,
    setPassWord : (c) => set((s) => ({login: {...s.login, password:c} }))
})) 
