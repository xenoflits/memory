import React from 'react';

import Scoreboard from './Scoreboard'

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playercpu: "cpu",
            player1: 0,
            player2: 0,
            timer: 10
        }
    }
    render(){
        return( 
        <div>board
           <Scoreboard 
            player1={this.state.player1}
            player2={this.state.player2} 
            playercpu={this.state.playercpu}
            timer={this.state.timer}/>
            <div>gameboard
                <div>cards
                </div>
            </div>
        </div>
        )
    }
}

export default Board