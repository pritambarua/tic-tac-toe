import React from 'react';
import { useSelector } from 'react-redux';
import { names } from '../../PlayerForm/initializePlayers';

function Player({turn}) {
  const getName = useSelector(names);
    
  return (
      <b>
        {getName[`player${turn}`]}
      </b>
  )
}

export default Player;