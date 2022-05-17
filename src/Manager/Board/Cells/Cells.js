import React from 'react'
import styles from './Cells.module.css'

function Cells({value}) {
  return (
    <button className={styles.box}>
        {
        value === -1 ? 'N' : 
        value === 1 ? 'X' : '0'
        }
    </button>
  )
}

export default Cells