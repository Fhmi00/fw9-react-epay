import React from 'react'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import { Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
