import { useState } from "react"
import {create} from 'zustand'

interface Register {
        name: string,
        email: string,
        password: string
    }

interface RegisterStoreType {
    register : Register,
    setName: (c: string) => void,
    setEnail : (c: string) => void,
    setPassWord : (c: string) => void
}

export const registerStore = create<RegisterStoreType>()((set) => ({
    register: {name: "", email: "",password: ""},
    setName: (c) => set((s) => ({register: {...s.register, email:c} })) , 
    setEnail : (c) => set((s) => ({register: {...s.register, email:c} })) ,
    setPassWord : (c) => set((s) => ({register: {...s.register, password:c} }))
}))