import React, { useState } from 'react'
import Table from './Table/Table';

function Board(props) {
    const [ board, setBoard ] = useState(new Array(3).fill(-1).map(() => new Array(3).fill(-1)));
  return (
    <div>
        {<Table board = {board}></Table>}
    </div>
  )
}

export default Board