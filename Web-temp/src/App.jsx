import { useState } from 'react'
import './App.css'
import Navebar from './component/Navebar'
import Footer from './component/Footer'
import Home from './component/Home'

function App() {
  const [title, setTitle] = useState('Fertilizer')

  return (
    <>
    <Navebar tit = {title}/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
