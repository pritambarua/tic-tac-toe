import React from 'react';
import { useSelector } from 'react-redux';
import { data } from '../../HomePage/initializePlayers';

function Player({turn}) {
  const getName = useSelector(data);
    
  return (
      <b>
        Current Player : {getName[`player${turn}`]}
      </b>
  )
}

export default Player;