import React, { useEffect, useState } from 'react'
import { doc, updateDoc } from "firebase/firestore"; 
import db from '../../firebase.config';
import { useNavigate } from 'react-router';
import { data, handleMyself, handleNameChange, handleRoomChange } from './initializePlayers';
import { useDispatch, useSelector } from 'react-redux';


const setPlayer2 = (name, roomCode, navigate) => {
    const roomRef = doc(db, "Gamerooms", roomCode);
    updateDoc(roomRef, {
            player2: name,
            playersInitialized: true,
        }).then((curr) => {
            console.log(curr);
            navigate('/start');
        }).catch((error) => {
            alert('No such Room Code Exist')
        })
}

function JoinRoom() {
    const players = useSelector(data);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleMyself('2'));
    }, []);

  return (
    <div>
        <label>Enter Your name : </label>
            <input onChange = {(e) => dispatch(handleNameChange({name: 'player2', value: e.target.value}))}></input>
            Enter Room Code:
        <input onChange = {(e) => dispatch(handleRoomChange({roomCode: e.target.value}))}></input>
            <button onClick = {(e) => setPlayer2(players.player2, players.room, navigate)} > Submit </button> 
        
    </div>
  )
}

export default JoinRoom