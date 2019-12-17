import React from 'react';

function Scoreboard(props){
    return(
        <div>scoreboard
            timer = {props.timer}
                player 1 = {props.player1}
                {props.playercpu} = {props.player2}
                   
        </div>
    )
}

export default Scoreboard