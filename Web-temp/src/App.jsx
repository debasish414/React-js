import { useState } from 'react'
import './App.css'
import Navebar from './component/Navebar'
import Footer from './component/Footer'
import Home from './component/Home'

function App() {
  let [title, setTitle] = useState('Fertilizer')

  const [mode, setMode] = useState('dark')

  const toggleMode = ()=>{
    if (mode === "light"){
      setMode("dark")
    }else{
      setMode("light")

    }
        
  }

  return (
    <>
    <Navebar tit = {title} mode= {mode} toggleMode = {toggleMode} />
    <Home/>
    <Footer/>
    </>
  )
}

export default App
