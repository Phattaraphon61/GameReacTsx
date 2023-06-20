import React, { useEffect, useState } from 'react';
import "./GameOne.css"
import player from "./player.png"
import enemy from "./enemy.png"
const GameOne: React.FC = () => {
    const [time, setTime] = useState(0)
    const [timerid, setTimerid] = useState(0)
    const [start, setStart] = useState(false)
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [screen, setScreen] = useState("")
    const [playerhealth, setPlayerhealth] = useState(50)
    const [enemyhealth, setEnemyhealth] = useState(0)
    let seconds = time;
    useEffect(() => {
        resetData();
    }, [])

    function startCountdown() {
        let countdown = setInterval(function () {
            if (seconds > 0) {
                seconds--;
                setTime(seconds)
            }
            if (seconds == 1) {
                stopCountdown();
            }
        }, 1000);
        console.log(countdown)
        setTimerid(Number(countdown))
    }

    function stopCountdown() {
        clearInterval(timerid);
        setStart(false);
        setScreen("");
    }
    const numpadInput = (number: string) => {
        setScreen(n => n + number)
    }
    const clearScreen = () => {
        setScreen("")
    }
    const summitAnswer = () => {
        if (screen) {
            if ((number1 + number2) == Number(screen)) {
                setEnemyhealth(n => n + 5)
                if ((enemyhealth + 5) == 50) {
                    stopCountdown();
                    setStart(false)
                }
            } else {
                setPlayerhealth(n => n - 5)
                if ((playerhealth - 5) == 0) {
                    stopCountdown();
                    setStart(false)
                }
            }
            setScreen("")
            setNumber1(Math.floor(Math.random() * 10))
            setNumber2(Math.floor(Math.random() * 10))
        }
    }
    const startGame = () => {
        resetData();
        setStart(true)
        setNumber1(Math.floor(Math.random() * 10))
        setNumber2(Math.floor(Math.random() * 10))
        startCountdown();
    }
    const resetData = () => {
        setTime(30)
        seconds = 30;
        setPlayerhealth(50)
        setEnemyhealth(0)
        setScreen("");
        setStart(false)
        setNumber1(0)
        setNumber2(0)
    }
    return (
        <div className='GameOne'>
            <h1>Time : {time}</h1>
            <div className='health'>
                <div className="progress-container progress-container-player">
                    <progress className="progressplayer" id="playerhealth" value={playerhealth} max="50"></progress> {playerhealth}
                    {/* <p className="progress-label">
                        80%
                    </p> */}
                </div>
                <div className="progress-container progress-container-enemy">
                    {Math.abs(enemyhealth - 50)} <progress className="progressplayer" id="playerhealth" value={enemyhealth} max="50">
                    </progress>
                    {/* <p className="progress-label">
                        80%
                    </p> */}
                </div>
            </div>
            <div className='content'>
                <div className='player'>
                    <img src={player} width={200} height={200}></img>
                </div>
                <div className='content2'>
                    {start ? <div className='proposition'>
                        <div >
                            {number1}
                        </div>
                        <div>
                            +
                        </div>
                        <div>
                            {number2}
                        </div>
                    </div> : <div className='proposition'>
                        <button onClick={() => startGame()}>Start</button>
                        <button onClick={() => resetData()}>Reset</button>
                    </div>}
                    <div className='answer'>
                        <input type="text" value={screen} readOnly />
                        <button onClick={clearScreen}>X</button>
                    </div>
                    <div className='numpad'>
                        <div className='row1'>
                            <div onClick={() => numpadInput("1")}>
                                1
                            </div>
                            <div onClick={() => numpadInput("2")}>
                                2
                            </div>
                            <div onClick={() => numpadInput("3")}>
                                3
                            </div>
                        </div>
                        <div className='row2'>
                            <div onClick={() => numpadInput("4")}>
                                4
                            </div>
                            <div onClick={() => numpadInput("5")}>
                                5
                            </div>
                            <div onClick={() => numpadInput("6")}>
                                6
                            </div>
                        </div>
                        <div className='row3'>
                            <div onClick={() => numpadInput("7")}>
                                7
                            </div>
                            <div onClick={() => numpadInput("8")}>
                                8
                            </div>
                            <div onClick={() => numpadInput("9")}>
                                9
                            </div>
                        </div >
                        <div className='row4'>
                            <div style={{ width: "20%" }} onClick={() => numpadInput("0")}>
                                0
                            </div>
                            <div style={{ width: "45%" }} onClick={() => summitAnswer()}>
                                Enter
                            </div>
                        </div>
                    </div>
                </div>
                <div className='enemy'>
                    <img src={enemy} width={200} height={200}></img>
                </div>
            </div>
        </div>
    );
};

export default GameOne;
