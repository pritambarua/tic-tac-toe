import React, { useEffect, useRef, useState } from 'react'
import { doc, setDoc, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore"; 
import db from '../../firebase.config';
import {handleRoomChange ,handleNameChange, data, handleMyself} from './initializePlayers'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';

const getRandom = () => Math.floor(Math.random()*90000) + 10000;
const setPlayer1 = (name, roomCode, setIsNameEntered) => {
    setIsNameEntered(true);
    const roomRef = doc(db, "Gamerooms", roomCode);
    updateDoc(roomRef, {
            player1: name,
        }).then((curr) => {
            console.log(curr);
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
          console.log(players.room);
          console.log("Current data: ", doc.data());
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
    <div>
        {
            isNameEntered ?  <div>
            {!startGame ? 
            `Ask the other player to enter this room code ${players.room}` : 
            navigate('/start')
            }
            
            </div> :
            <div>
            <label>Enter Your name : </label>
            <input onChange = {(e) => dispatch(handleNameChange({name: 'player1', value: e.target.value}))}></input>
            <button onClick = {() => setPlayer1(players.player1, players.room, setIsNameEntered)} > Submit </button> 
            </div>
        }
       
    </div>
  )
}

export default CreateRoom