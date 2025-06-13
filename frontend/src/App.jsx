import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Addemp from './components/Addemp'
import Viewemp from './components/Viewemp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Viewemp/>}/>
        <Route path='/a' element={<Addemp/>}/>

      </Routes>
    </>
  )
}

export default App
