import React from 'react'
import './tile.css';

function Tile(props) {
  return (
    <button className='tile' id={props.tileId} onClick={props.clickOnTile} value={props.tileValue}>{props.tileValue}</button>
  )
}

export default Tile