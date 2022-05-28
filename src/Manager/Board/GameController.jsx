import React, { useState } from 'react'
import Table from './Table/Table';
import { useSelector } from 'react-redux';
import {board , currentPlayer, gameState} from './GameController.config';
import Player from './Dashboard/Player';

function Board(props) {
    const gameBoard = useSelector(board);
    const nextTurn = useSelector(currentPlayer);
    const isGameCompleted = useSelector(gameState);

  return (
    <div>
        <Player turn={nextTurn.id}></Player>
        <Table board = {gameBoard}></Table>
    </div>
  )
}

export default Board