import React, { useState } from 'react'
import { registerStore } from '../../store/registerStore'
import type { stateType } from '../Register/Register'
import { loginApi } from '../../API/apiClient'
import LoginBox from '../../components/LoginBox/LoginBox'

export default function Login() {

    const registerData = registerStore(s => s.register)
    const [state, setstate] = useState<stateType>({data:{}, loading: false, error: ''})

    function onchangeHendler(){
        setstate({...state, loading: true})
        loginApi(registerData).then((res)  => res)
        .then((res) => setstate({data:res, ...state, loading: false}))
        .catch((err) => setstate({...state, loading: false, error:err.message? err.message: "some Error"} ))
    }
  return (
    <div>
        {state.loading && <></>}
        {!state.loading && <LoginBox onSubmitHendler={onchangeHendler}/>}
        {state.error && <></>}
    </div>
  )
}
