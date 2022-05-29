import React from 'react'
import Cells from '../Cells/Cells';
import styles from './Table.module.css'

function table(props) {
    const {board, isDisabled} = props;
  return (
    <div className={styles.table}>
        {
            board.map((row, rowIndex) => 
                    row.map((element, colIndex) => 
                            <Cells key = {`${rowIndex}${colIndex}`}
                                   row= {rowIndex}
                                   col = {colIndex}
                                   value = {element}
                                   isDisabled = {isDisabled}
                                   >
                            </Cells>))
        }
    </div>
  )
}

export default table