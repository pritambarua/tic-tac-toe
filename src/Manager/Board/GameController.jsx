import React, { useState } from 'react'
import Table from './Table/Table';
import Player from './Dashboard/Player';
import styles from './GameController.module.css'

function Board(props) {
    const {board, turn, isDisabled, state} = props

  return (
    <div style={{marginTop: '20%'}}>
        <Player turn={turn}></Player>
        <Table state = {state} board = {board} isDisabled= {isDisabled}></Table>
    </div>
  )
}

export default Board