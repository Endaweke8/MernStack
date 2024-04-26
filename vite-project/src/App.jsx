import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Users } from './Users'
import { UpdateUser } from './UpdateUser'
import { CreateUser } from './CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
     <Routes >
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update' element={<UpdateUser/>}></Route>

     </Routes>
    </BrowserRouter>
  )

}

export default App
