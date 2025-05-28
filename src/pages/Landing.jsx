import { useNavigate } from "react-router-dom"
import './Landing.css'

function Landing () {
    const navigate = useNavigate()
    const storeNames = (event) => {
        event.preventDefault()
        sessionStorage.setItem("player1", document.getElementById("player1name").value)
        sessionStorage.setItem("player2", document.getElementById("player2name").value)
        navigate('/game')
    }

    return (
        <div id = "landing" className = "font-gugi dark:bg-black border-2 border-cyan-500 bg-neutral-150 h-full flex flex-col gap-[5vh] items-center dark:text-white text-center justify-center" >
            <h1 className = "max-sm:text-[5vw] text-[3vw]">Tic-Tac-Toe</h1>
            <form id = "playerinfo" onSubmit = {storeNames} className = "bg-[rgba(200,200,150)] dark:bg-[rgba(100,100,50)]">
                <h3>Enter Player Names:</h3>
                <div className = "playername">
                    <label>Player-X:</label>
                    <input type = "text" id = "player1name" className = "bg-[rgba(200,200,200,0.7)] dark:bg-[rgba(50,50,50,0.7)]"/>
                </div>
                <div className = "playername">
                    <label>Player-O:</label>
                    <input type = "text" id = "player2name" className = "bg-[rgba(200,200,200,0.7)] dark:bg-[rgba(50,50,50,0.7)]"/>
                </div>
                <div>
                    <input type = "submit" id = "playersubmit"/>
                </div>
            </form>
        </div>
    )
}

export default Landing