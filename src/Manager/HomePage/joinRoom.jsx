import React, { useEffect } from 'react'
import { doc, updateDoc } from "firebase/firestore"; 
import db from '../../firebase.config';
import { useNavigate } from 'react-router';
import { data, handleMyself, handleNameChange, handleRoomChange } from './initializePlayers';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';


const setPlayer2 = (name, roomCode, navigate) => {
    const roomRef = doc(db, "Gamerooms", roomCode);
    updateDoc(roomRef, {
            player2: name,
            playersInitialized: true,
        }).then((curr) => {
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
    <div style= {{display: 'grid',padding: 20, rowGap: '50%', marginTop: '20%'}}>
        <TextField id="second-player" label="Enter Your name" variant="filled" 
         onChange = {(e) => dispatch(handleNameChange({name: 'player2', value: e.target.value}))}></TextField>
        <TextField id="second-player" label="Enter A Room Code" variant="filled"
         onChange = {(e) => dispatch(handleRoomChange({roomCode: e.target.value}))}></TextField>
         <Button size="large" variant="contained" onClick = {(e) => setPlayer2(players.player2, players.room, navigate)} > Submit </Button> 
        
    </div>
  )
}

export default JoinRoom