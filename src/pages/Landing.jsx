import { useNavigate } from "react-router-dom"


function Landing () {
    const navigate = useNavigate()
    const storeNames = (event) => {
        event.preventDefault()
        sessionStorage.setItem("player1", document.getElementById("player1name").value)
        sessionStorage.setItem("player2", document.getElementById("player2name").value)
        navigate('/game')
    }

    return (
        <div id = "landing" className = "font-gugi dark:bg-black bg-neutral-150 h-full flex flex-col gap-[5vh] items-center dark:text-white text-center justify-center" >
            <h1 className = "max-sm:text-2xl text-4xl font-extrabold">Tic-Tac-Toe</h1>
            <form id = "playerinfo" onSubmit = {storeNames} className = "p-[3vh_5vw] max-sm:text-base max-[390px]:p-[3vh_10vw] max-[390px]:text-xs text-lg bg-[rgba(200,200,150)] flex flex-col items-center justify-center gap-[3vh] rounded-xl dark:bg-[rgba(100,100,50)]">
                <h3>Enter Player Names:</h3>
                <div className = "flex gap-[2.5vh] max-[390px]:flex-col max-[390px]:gap-1 justify-evenly items-center">
                    <label>Player-X:</label>
                    <input type = "text" id = "player1name" className = "bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(0,0,0,0.7)] p-[1vh] rounded-md"/>
                </div>
                <div className = "flex gap-[2.5vh] max-[390px]:flex-col max-[390px]:gap-1 justify-evenly items-center">
                    <label>Player-O:</label>
                    <input type = "text" id = "player2name" className = "bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(0,0,0,0.7)] p-[1vh] rounded-md"/>
                </div>
                <div>
                    <input type = "submit" id = "playersubmit"/>
                </div>
            </form>
        </div>
    )
}

export default Landing