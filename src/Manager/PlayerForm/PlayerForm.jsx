import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {handleChange, names} from './initializePlayers'

function PlayerForm({handleSubmit}) {
    const players = useSelector(names);
    const dispatch = useDispatch();
    const submit = e => {
      e.preventDefault();
      handleSubmit();
    }

    return (
      <form onSubmit={submit}>
        <label> 
          Player 1: <input type = "text" value = {players.player0} onChange={e => dispatch(handleChange({name: "player0", value: e.target.value}))} required/>
        </label>
        <label>  
          Player 2: <input type = "text" value = {players.player1} onChange={e => dispatch(handleChange({name: "player1", value: e.target.value}))} required/>
        </label>
        <label>
          <input type="submit"></input>
        </label> 
      </form>
  )
}

export default PlayerForm