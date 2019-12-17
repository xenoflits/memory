import React from 'react'

import Tile from './Tile'

function Gameboard(props){
    const listItems = props.boardstate.map(
        (tile => <Tile name={tile[0]}/>)
    )

    if (!props.newgame){
    return(
       
        <ul className="boardContainer">{listItems}</ul>
    )
    }
    else
    return (<div></div>)
}

export default Gameboard