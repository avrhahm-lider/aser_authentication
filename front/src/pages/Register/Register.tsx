import React, { useEffect, useState } from 'react'
import { registerStore } from '../../store/registerStore'
import { registerApi } from '../../API/apiClient'
import { data } from 'react-router'
import RegisterBox from '../../components/RegisterBox/RegisterBox'
export interface stateType{
    data: {},
     loading: boolean,
      error: ''
} 

export default function Register() {
    const registerData = registerStore(s => s.register)
    const [state, setstate] = useState<stateType>({data:{}, loading: false, error: ''})

    function onchangeHendler(){
        setstate({...state, loading: true})
        registerApi(registerData).then((res)  => res)
        .then((res) => setstate({data:res, ...state, loading: false}))
        .catch((err) => setstate({...state, loading: false, error:err.message? err.message: "some Error"} ))
    }
    useEffect(()=>{

    }, [])
    console.log(state.loading);
    
  return (
    <div>
        {state.loading && <></>}
        {!state.loading && <RegisterBox onSubmitHendler={onchangeHendler}/>}
        {state.error && <></>}
        
    </div>
  )
}
