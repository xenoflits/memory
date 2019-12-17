import React from 'react';

import Scoreboard from './Scoreboard'
import Gameboard from './Gameboard'

class Board extends React.Component {
    constructor(props){
        super(props);
        this.shake=this.shake.bind(this);
        this.newGame=this.newGame.bind(this);
        this.state = {
            playercpu: "cpu",
            player1: 0,
            player2: 0,
            timer: 10,
            newgame: true,
            boardstate: [
                ["dog", false],
                ["dog", false],
                ["cat", false],
                ["cat", false],
                ["chicken", false],
                ["chicken", false],
                ["pork", false],
                ["pork", false],
                ["cow", false],
                ["cow", false],
                ["goat", false],
                ["goat", false],
            ]
        }
    }

    //shuffle function
    shake(arr){
        this.setState({
            player1: 10
        })
    }

    //new game buttons
    newGame(x){
        this.setState({
            newgame: false
        })
    }

    render(){
        return( 
        <div>board
           <Scoreboard newGame = {this.newGame} clickFunc={this.shake}
            player1={this.state.player1}
            player2={this.state.player2} 
            playercpu={this.state.playercpu}
            timer={this.state.timer}/>
            <Gameboard newgame= {this.state.newgame} boardstate={this.state.boardstate}/>
        </div>
        )
    }
}

export default Board