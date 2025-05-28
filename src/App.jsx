
import Landing from './pages/Landing.jsx'
import Game from './pages/Game.jsx'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div id = "app" className = {`${darkMode && `dark bg-black`} font-gugi h-screen flex flex-col justify-center`}>
      <Header darkMode = {darkMode} setDarkMode = {setDarkMode} />
      <Routes>
        <Route path = "/" element = {<Landing/>} />
        <Route path = "/game" element = {<Game />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App