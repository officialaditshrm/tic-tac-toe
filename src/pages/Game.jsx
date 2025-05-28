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
    const [redCell, setRedCell] = useState(Array(9).fill(false))

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
        setWin(null)
        setWinDisplay(false)
        setWinCells(Array(3).fill(null))
    }, [xCells, oCells])

    const resetGame = () => {
        setBoard(Array(9).fill(""))
    }

    useEffect (() => {
        let redd = Array(9).fill(false)
        for (let i = 0; i < 3; i++){
            console.log(winCells[i])
            redd[winCells[i]] = true
        }
        setRedCell(redd)
    }, [winCells])

    return (
        <div id = "game" className = "font-gugi flex max-sm:flex-col max-sm:justify-center max-sm:mb-[10vh] justify-evenly max-sm:gap-[5vh] h-full items-center border-2 border-cyan-500 dark:text-white ">
            <div >
                <h1 id = "display1" className = "text-[3vw] max-sm:text-[5vw]">X: {player1}</h1>
                <h1 id = "display2" className = "text-[3vw] max-sm:text-[5vw]">O: {player2}</h1>
            </div>
            <div className = " flex flex-col items-center sm:h-full justify-center gap-[5vh]">
                <div id = "maingame">
                    {board.map((newFill, idx) => (
                        <button className = {`${redCell[idx] ? `bg-amber-500 text-black`:`text-white dark:text-black bg-neutral-800 hover:bg-neutral-600 hover:dark:bg-neutral-500 dark:bg-neutral-200`} hover:scale-[1.03] hover:cursor-pointer font-gruppo text-[250%] font-extrabold shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] dark:shadow-[0_0_5px_1px_rgba(255,255,255,0.3)] `} disabled = {winDisplay} key = {idx} onClick = {() => newEntry(idx)}>{newFill}</button>
                    ))}
                </div>
                {winDisplay && <h1 className = "text-[2.5vw] max-sm:text-[5vw]">Winner is {win}</h1>}
            </div>
            <div>
                <button className = "p-[1vw_2vw] bg-red-500 text-white rounded-xl hover:scale-105 border dark:border-white/50 shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] dark:shadow-[0_0_5px_1px_rgba(255,255,255,0.3)] border-black dark:bg-red-800" onClick = {resetGame}>Reset</button>
            </div>
        </div>
    )
}

export default Game