import React, { useState } from 'react'
import Table from './Table/Table';
import Player from './Dashboard/Player';
import styles from './GameController.module.css'

function Board(props) {
    const {board, turn, isDisabled} = props

  return (
    <div>
        <Player turn={turn}></Player>
        <Table board = {board} isDisabled= {isDisabled}></Table>
    </div>
  )
}

export default Board