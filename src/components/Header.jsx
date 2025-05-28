import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import moon from '../images/moon.png'
import sun from '../images/sun.png'

function Header ({darkMode, setDarkMode}) {
    const [shortMenu, setShortMenu] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleDark = () => {
        setDarkMode(!darkMode)
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect (() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setShortMenu(true)
            } else {
                setShortMenu(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const navigate = useNavigate()

    const backHome = () => {
        navigate('/')
        setMenuOpen(false)
        sessionStorage.removeItem("player1")
        sessionStorage.removeItem("player2")
    }

    const toGit = () => {
        window.open('https://github.com/officialaditshrm', '_blank')
        setMenuOpen(false)
    }

    const portfolio = () => {
        window.open('https://officialaditshrm.github.io/portfolio')
        setMenuOpen(false)
    }

    return (
        <header id = "mainheader" className = {`${shortMenu ? 'block' : 'dark:border dark:border-white/10 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_5px_1px_rgba(255,255,255,0.1)] justify-between dark:bg-[rgba(30,30,30)] rounded-2xl bg-[rgba(235,235,235)] fixed right-[5vw] left-[5vw] top-[2vw] flex h-[10vh] items-stretch font-gruppo'}`}>
            {!shortMenu &&
                <div id = "buttons" className =  {`flex dark:text-white text-[1.5vw] justify-evenly w-[40%]`}>
                    <button className = "flex-1 rounded-l-2xl hover:bg-neutral-700/5 dark:hover:bg-neutral-200/5 hover:font-extrabold" title = 'Go back to Landing Page' onClick = {backHome}>Home</button>
                    <button className = "flex-1 hover:bg-neutral-700/5 dark:hover:bg-neutral-200/5 hover:font-extrabold" title='GitHub Profile' onClick = {toGit}>GitHub</button>
                    <button className = "flex-1 hover:bg-neutral-700/5 dark:hover:bg-neutral-200/5 hover:font-extrabold" title='More from the Developer' onClick = {portfolio}>More</button>
                </div>
            }
            {shortMenu &&
                <button
                onClick = {toggleMenu}
                id = "headerbutton"
                title = 'Menu'
                className = {`${menuOpen && 'bg-transparent dark:shadow-none dark:bg-transparent shadow-none border-none'} z-50 fixed flex flex-col justify-evenly items-center right-3 top-3 border dark:border dark:border-white/10 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_5px_1px_rgba(255,255,255,0.1)] justify-between dark:bg-[rgba(30,30,30)] bg-[rgba(235,235,235)] w-[10vh] h-[10vh] rounded-md py-1.5 hover:scale-105 hover:cursor-pointer`}
                >
                    <div className = {`${menuOpen && 'bg-white/0 dark:bg-white/0'} w-[60%] h-[1.05vh] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'rotate-[45deg]'} w-[60%] h-[1.05vh] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'rotate-[-45deg]'} absolute w-[60%] max-sm:h-[1.05vh] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'bg-white/0 dark:bg-white/0'} w-[60%] h-[1.05vh] bg-black dark:bg-white rounded-md`}></div>
                </button>
            }
            {shortMenu && menuOpen &&
                <div id = "menu" className = {`font-gruppo fixed p-[1.7vw] z-40 dark:text-white gap-5 text-[1.5vw] flex flex-col rounded-2xl bg-white/70 backdrop-blur-md dark:bg-black/70 items-center justify-evenly w-[15vw] max-sm:justify-center max-sm:w-screen top-24 right-7 max-sm:right-0 max-sm:top-0 max-sm:rounded-none max-sm:h-screen max-sm:text-[4.5vw]`}>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {backHome}>HOME</button>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toGit}>GITHUB</button>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {portfolio}>MORE</button>
                </div>
            }
            <div id= "darkmode" className = {`${shortMenu ? 'fixed bottom-5 right-5 max-sm:bottom-1 max-sm:right-1 dark:text-white flex z-30 justify-center items-center bg-white/0 rounded-full w-[9vw] h-[9vw] max-sm:w-[30vw] max-sm:h-[30vw]' : 'border-l-2 border-black/30 rounded-r-2xl dark:border-white/30 w-[15%] flex items-center justify-center'}`}>
                <button
                    id = "darkmodetoggle"
                    onClick = {toggleDark}
                    className = {`${shortMenu && "shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]"} border max-sm:h-[9vw] max-sm:w-[15vw] dark:text-white bg-sky-200 dark:bg-sky-950 h-[3vw] w-[6vw] rounded-full border-black dark:border-white hover:scale-110 duration-300 flex items-center`}
                    >
                    {
                        <div className = {`h-[2.55vw] max-sm:h-[7.5vw] mx-[0.15vw] max-sm:mx-[0.6vw] border border-black flex items-center justify-center w-[2.55vw] max-sm:w-[7.5vw] rounded-full bg-white bg-contain bg-no-repeat bg-center dark:translate-x-[2.925vw] max-sm:dark:translate-x-[5.85vw] `}>
                            <img src = {`${darkMode ? moon : sun}`} className = " w-[80%]"/>
                        </div>}
                </button>
            </div>
        </header>
    )
}


export default Header