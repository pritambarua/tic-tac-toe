import React from 'react'
import styles from './Cells.module.css'
import { turnPlayed } from '../GameController.config'
import { useDispatch, useSelector } from 'react-redux'
import { data } from '../../HomePage/initializePlayers'

function Cells(props) {
  const {value, row, col, isDisabled: disabled} = props
  const names = useSelector(data);
  const isDisabled = value === 'O' || value === 'X'
  const isNotMyTurn = disabled;
  const dispatch = useDispatch();

  return (
    <button className={`${styles.box}`}
            disabled = {isDisabled || isNotMyTurn}
            style={{cursor: isDisabled ? 'not-allowed' : isNotMyTurn ? 'wait': 'pointer'}} 
            onClick={() => {dispatch(turnPlayed({row, col, roomCode: names.room}))}}>
        {value}
    </button>
  )
}

export default Cells