import React, { useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { useRegister } from '../../hooks/useregister'
import { registerStore } from '../../store/registerStore'

interface LoginBoxProps{
    onSubmitHendler: () => void
}
export default function RegisterBox({onSubmitHendler}: LoginBoxProps) {
    const changeName = registerStore(s => s.setName)
    const changeEmail = registerStore(s => s.setEnail)
    const changePass = registerStore(s => s.setPassWord)


    useEffect(()=>{

    },[])
    
  return (
    <div>

    <form onSubmit={onSubmitHendler}>
        <label>
            <input type="text" placeholder='הכנס שם' onChange={(e) => changeName( e.target.value )}/>
        </label>
                <label>
            <input type="email" placeholder='הכנס מייל' onChange={(e) => changeEmail( e.target.value )} />
        </label>
                <label>
            <input type="text" min={8} placeholder='הכנס סיסמה' onChange={(e) => changePass( e.target.value )}/>
        </label>
        <button type='submit'>שלח</button>

        </form>
    </div>
  )
}
