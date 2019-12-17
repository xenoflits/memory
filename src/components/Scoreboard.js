import React from 'react';

function Scoreboard(props){
    return(
        <div >scoreboard
        <Buttons newGame={props.newGame}/>
            timer = {props.timer}
                player 1 = {props.player1}
                {props.playercpu} = {props.player2}
                   
        </div>
    )
}

function Buttons(props){
    return(
        <div>
            <button onClick={props.newGame}>New Game</button>
            <button>Toggle Player2/CPU</button>
        </div>
    )
}

export default Scoreboard