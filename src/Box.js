import React, { useEffect, useState } from 'react'
import refresh from './images/refresh.png'
import './Box.css'
import './InnerBox'
import InnerBox from './InnerBox'

const Box = () => {
    const [winner, setWinner] = useState('')
    useEffect(() => {

    }, [winner])

    return(
        <div className="boxed">
            <div className="contents">
                <p>Tic-Tac-Toe</p>
                <InnerBox setWinner={setWinner} />    
                <div className="winner">
                    {winner !== ''? <p className={winner === 'X'? 'sky' : 'pink'}> {winner} won! </p> : null}
                    {winner !== ''? <button className={winner === 'X'? 'button-3d sky-3d': 'button-3d pink-3d'} onClick={() => window.location.reload()}><img src={refresh} alt="Refresh"></img></button> : null}
                </div>    
            </div>
            
        </div>
    )
}

export default Box;