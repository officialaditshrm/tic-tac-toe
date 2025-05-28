import { useState, useEffect } from "react"
import './Game.css'

function Game () {
    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("")
    const [turn, setTurn] = useState("X")
    const [board, setBoard] = useState(Array(9).fill(""))
    const [last, setLast] = useState(Array(0))
    const [win, setWin] = useState(null)
    const [xCells, setXCells] = useState(Array(0))
    const [oCells, setOCells] = useState(Array(0))
    const [winDisplay, setWinDisplay] = useState(false)
    const [winCells, setWinCells] = useState(Array(3).fill(null))

    useEffect ( () => {
        setPlayer1(sessionStorage.getItem("player1") || "Player X")
        setPlayer2(sessionStorage.getItem("player2") || "Player O")
    }, [])

    

    const newEntry = (idx) => {

            const newBoard = [...board]
            const newLast = [...last]
            if (board[idx] !== "") {
                if (last[last.length-1] == idx){
                    newBoard[idx] = ""
                    newLast.pop()
                }
            }
            else {
                newBoard[idx] = turn
                newLast.push(idx)
            }
            setLast(newLast)
            setBoard(newBoard)
            setTurn(turn === "X" ? "O" : "X")

    }

    useEffect (() => {
        const xArr = []
        const oArr = []
        board.forEach ((cell, idx) => {
            if (cell === "X") xArr.push(idx)
            else if (cell === "O") oArr.push(idx)
        })
        setXCells(xArr)
        setOCells(oArr)
    }, [board])

    useEffect (() => {
        const lenx = xCells.length
        const leno = oCells.length
        for (let i = 0; i < lenx; i++) {
            for (let j = i+1; j < lenx; j++){
                for (let k = j+1; k < lenx; k++){
                    if (xCells[k]-xCells[j] == xCells[j]-xCells[i]){
                        if (xCells[k]-xCells[j] == 1 && xCells[k]%3 != 2) {
                            break
                        } else if (xCells[k] - xCells[j] == 2 && xCells[k] != 6){
                            break
                        } else {
                            console.log("X wins")
                            setWin(player1)
                            setWinDisplay(true)
                            setWinCells([xCells[i], xCells[j], xCells[k]])
                            return
                        }
                    }
                }
            }
        }
        for (let i = 0; i < leno; i++) {
            for (let j = i+1; j < leno; j++){
                for (let k = j+1; k < leno; k++){
                    if (oCells[k]-oCells[j] == oCells[j]-oCells[i]){
                        if (oCells[k]-oCells[j] == 1 && oCells[k]%3 != 2) {
                            break
                        } else if (oCells[k] - oCells[j] == 2 && oCells[k] != 6){
                            break
                        } else {
                            console.log("O Wins")
                            setWin(player2)
                            setWinDisplay(true)
                            setWinCells([oCells[i], oCells[j], oCells[k]])
                            return
                        }
                    }
                }
            }
        }
    }, [xCells, oCells])

    return (
        <div id = "game">
            <h1 id = "display1">X: {player1}</h1>
            <h1 id = "display2">O: {player2}</h1>
            <div id = "maingame">
                {board.map((newFill, idx) => (
                    <button className = {`cells${winCells.includes(idx) ? ' win' : ''}`} disabled = {winDisplay} key = {idx} onClick = {() => newEntry(idx)}>{newFill}</button>
                ))}
            </div>
            {winDisplay && <h1>Winner is {win}</h1>}
        </div>
    )
}

export default Game