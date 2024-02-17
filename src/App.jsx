import { useState } from 'react'
import reactLogo from './assets/Logo.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='logo-container'>
        <img src={reactLogo} className="logo" alt="logo" />
       
      <h1></h1>
      </div>
    </>
  )
}

export default App
