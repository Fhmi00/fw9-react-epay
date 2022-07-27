import React from 'react'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CreatePin from './pages/CreatePin'
import CreatePinSuccess from './pages/CreatePinSuccess'
import { Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
        <Route path='createpin' element={<CreatePin/>}></Route>
        <Route path='createpinsuccess' element={<CreatePinSuccess/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
