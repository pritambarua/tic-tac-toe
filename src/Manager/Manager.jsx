import React from 'react'
import Board from './Board/GameController'
import { useState } from 'react';
import PlayerForm from './PlayerForm/PlayerForm';

function Manager() {
    const [playersInitalized, setPlayersInitialized] = useState(false);
    const handleSubmit = () => {
        setPlayersInitialized(true);
    }

  return (
    <React.Fragment>
    {
        !playersInitalized ? <PlayerForm handleSubmit = { handleSubmit}></PlayerForm> : <Board></Board>
    }
    </React.Fragment>
  )
}

export default Manager