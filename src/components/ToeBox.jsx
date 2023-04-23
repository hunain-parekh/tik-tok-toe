import React, { useState } from "react";
import Button from './Button';
import "./toe-box.css";
import Tile from "./Tile";

function ToeBox() {
  const [player, setPlayer] = useState(1);
  const [tile, setTile] = useState(Array(9).fill(null));
  const winner = calculateWinner(tile);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }
  else{
    status = `Player ${player} Turn`;
  }
  function clickOnTile(i) {
    if(tile[i] || calculateWinner(tile)){
      return;
    }
    const tick="✔️";
    const cross = "❌";
    if(player === 1){
      const nextTiles = tile.slice();
      nextTiles[i] = tick;
      setTile(nextTiles);
      setPlayer(2);
    }
    else{
      const nextTiles = tile.slice();
      nextTiles[i] = cross;
      setTile(nextTiles);
      setPlayer(1);
    }
  }

  function handleReset(){
    setTile(Array(9).fill(null));
    setPlayer(1);
  }

  function calculateWinner(tiles){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        return tiles[a];
      }
    }
    return null;
  }

  return (
    <>
      <div>{status}</div>
      <div className="toeBox">
        <Tile tileId={tile[0]} clickOnTile={()=> clickOnTile(0)} tileValue={tile[0]}/>
        <Tile tileId={tile[1]} clickOnTile={()=> clickOnTile(1)} tileValue={tile[1]}/>
        <Tile tileId={tile[2]} clickOnTile={()=> clickOnTile(2)} tileValue={tile[2]}/>
        <Tile tileId={tile[3]} clickOnTile={()=> clickOnTile(3)} tileValue={tile[3]}/>
        <Tile tileId={tile[4]} clickOnTile={()=> clickOnTile(4)} tileValue={tile[4]}/>
        <Tile tileId={tile[5]} clickOnTile={()=> clickOnTile(5)} tileValue={tile[5]}/>
        <Tile tileId={tile[6]} clickOnTile={()=> clickOnTile(6)} tileValue={tile[6]}/>
        <Tile tileId={tile[7]} clickOnTile={()=> clickOnTile(7)} tileValue={tile[7]}/>
        <Tile tileId={tile[8]} clickOnTile={()=> clickOnTile(8)} tileValue={tile[8]}/>
      </div>
      <Button onClick={handleReset}/>
    </>
  );
}

export default ToeBox;
