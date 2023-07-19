import { useState } from 'react'
import logo from './image/background/rickandmortyt1.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <img src={logo} alt="logo"/> 
    </div>
  )
}

export default App
