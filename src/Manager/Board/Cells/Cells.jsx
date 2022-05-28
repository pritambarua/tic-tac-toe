import React, { useState } from 'react'
import styles from './Cells.module.css'
import { turnPlayed } from '../GameController.config'
import { useDispatch } from 'react-redux'

function Cells({value, row, col}) {
  const [isDisabled, setDisable] = useState(false);
  const dispatch = useDispatch();

  return (
    <button className={styles.box}
            disabled = {isDisabled}
            style={{cursor: isDisabled ? 'not-allowed' : 'pointer'}} 
            onClick={() => {setDisable(true); dispatch(turnPlayed({row, col}))}}>
        {value}
    </button>
  )
}

export default Cells