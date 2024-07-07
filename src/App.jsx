import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Modal from './components/Modal'
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(true)
  


  

  return (
    <>
      <div className='h-[100vh] w-[100vw] text-col bg-background'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />  
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
