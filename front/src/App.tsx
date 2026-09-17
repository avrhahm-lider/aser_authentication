import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>

      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='' element={<></>}/>

    </Routes>
  )
}

export default App
