import React, { useEffect, useState } from 'react'
import { doc, setDoc, onSnapshot, updateDoc } from "firebase/firestore"; 
import db from '../../firebase.config';
import {handleRoomChange ,handleNameChange, data, handleMyself} from './initializePlayers'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button, CircularProgress, TextField } from '@mui/material';

const getRandom = () => Math.floor(Math.random()*90000) + 10000;
const setPlayer1 = (name, roomCode, setIsNameEntered) => {
    setIsNameEntered(true);
    const roomRef = doc(db, "Gamerooms", roomCode);
    updateDoc(roomRef, {
            player1: name,
        }).then((curr) => {
            
        }).catch((error) => {
            alert('No such Room Code Exist')
        })
}

function CreateRoom(props) {
  const players = useSelector(data);
  const dispatch = useDispatch();
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const rand = getRandom().toString();
    dispatch(handleRoomChange({roomCode: rand}));
    dispatch(handleMyself('1'));
  }, []);

  useEffect(() => {
      if(players.room){  
      setDoc(doc(db, "Gamerooms", players.room), {
          player1: '',
          player2: '',
          board: new Array(9).fill(' '),
          turn: '1',
          playersInitialized: false,
          gameOver: false,
          chancesLeft: 9
      }).catch((error) => {
          console.log(error);
      })
  
      const unsub = onSnapshot(doc(db, "Gamerooms", players.room), (doc) => {
          
          const {playersInitialized} = doc.data();
          setStartGame(playersInitialized);
        });
  
        return () => {
           // deleteDoc(doc(db, "Gamerooms", players.room))
            unsub();
        }
      }
  }, [players.room])

  return (
    <div style= {{display: 'grid',padding: 20, rowGap: '50%', marginTop: '20%', textAlign: 'center'}}>
        {
            isNameEntered ? 
            !startGame ? <>
             <span>{`Your Room Code`}</span>
             <span><Button size="large" variant="contained">{players.room}</Button></span>
             <span> Waiting for others to join your room</span>
             <span><CircularProgress></CircularProgress></span>
             </>
              : navigate('/start')
            :
            <>
            <TextField id="outlined-basic" label="Enter Your name" variant="filled" 
            onChange = {(e) => dispatch(handleNameChange({name: 'player1', value: e.target.value}))}/>
            <Button size="large" variant="contained" onClick = {() => setPlayer1(players.player1, players.room, setIsNameEntered)} > Submit </Button> 
            </>
        }
       
    </div>
  )
}

export default CreateRoom