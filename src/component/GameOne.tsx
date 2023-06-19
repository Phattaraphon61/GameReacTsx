import React, { useState } from 'react';
import "./GameOne.css"
import player from "./player.png"
import enemy from "./enemy.png"
const GameOne: React.FC = () => {
    const [first, setfirst] = useState(10)
    const startTime = () => {
        const timer = setInterval(() => {
            setfirst(n => n > 0 ? n - 1 : n)
        }, 1000);
    }
    return (
        <div className='GameOne'>
            <h1>Time : {first}</h1>
            <div className='health'>
                <div className="progress-container progress-container-player">
                    <progress className="progressplayer" id="playerhealth" value="80" max="100"></progress> 80
                    {/* <p className="progress-label">
                        80%
                    </p> */}
                </div>
                <div className="progress-container progress-container-enemy">
                    80 <progress className="progressplayer" id="playerhealth" value="20" max="100">
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
                    <div className='proposition'>
                        <div>
                            5
                        </div>
                        <div>
                            +
                        </div>
                        <div>
                            6
                        </div>
                    </div>
                    <div className='answer'>
                        <input type="text" value="123" />
                        <button>X</button>
                    </div>
                    <div className='numpad'>
                        <div className='row1'>
                            <div>
                                1
                            </div>
                            <div>
                                2
                            </div>
                            <div>
                                3
                            </div>
                        </div>
                        <div className='row2'>
                            <div>
                                4
                            </div>
                            <div>
                                5
                            </div>
                            <div>
                                6
                            </div>
                        </div>
                        <div className='row3'>
                            <div>
                                7
                            </div>
                            <div>
                                8
                            </div>
                            <div>
                                9
                            </div>
                        </div >
                        <div className='row4'>
                            <div style={{ width: "20%" }}>
                                0
                            </div>
                            <div style={{ width: "45%" }}>
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
