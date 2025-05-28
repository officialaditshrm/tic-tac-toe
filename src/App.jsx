import './App.css'
import Landing from './pages/Landing.jsx'
import Game from './pages/Game.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Landing/>} />
        <Route path = "/game" element = {<Game />} />
      </Routes>
    </>
  )
}

export default App