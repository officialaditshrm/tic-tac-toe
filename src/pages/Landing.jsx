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
        <>
            <h1>Tic-Tac-Toe</h1>
            <form id = "playerinfo" onSubmit = {storeNames}>
                <h3>Enter Player Names:</h3>
                <div className = "playername">
                    <label>Player-X:</label>
                    <input type = "text" id = "player1name"/>
                </div>
                <div className = "playername">
                    <label>Player-O:</label>
                    <input type = "text" id = "player2name"/>
                </div>
                <div>
                    <input type = "submit" id = "playersubmit"/>
                </div>
            </form>
        </>
    )
}

export default Landing