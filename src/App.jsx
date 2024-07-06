import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Modal from './components/Modal'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(true)
  useSelector((state) => {
    console.log(state, "statestatestatestate")
  })
  return (
    <>

      <div className='h-[100vh] w-[100vw] text-red-500'>
        <Dashboard />
      </div>
    </>
  )
}

export default App
