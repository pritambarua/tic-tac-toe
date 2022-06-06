import { doc, updateDoc } from '@firebase/firestore';
import { Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import db from '../../firebase.config';
import { data } from '../HomePage/initializePlayers';
import styles from './replay.module.css'

const playAgain = (roomCode) => {
    const roomRef = doc(db, "Gamerooms", roomCode);
    updateDoc(roomRef, {
        board: new Array(9).fill(' '),
        turn: '1',
        gameOver: false,
        chancesLeft: 9,
        }).then((curr) => {

        }).catch((error) => {
            alert('No such Room Code Exist')
        })
}

function Result(props) {
    const {state, chances, turn} = props;
    const players = useSelector(data);
    let message;
    if(chances === 0){
        message = `It's a Draw !!`
    }else {
        message = `Hurrah ${players[`player${turn}`]} won`;
    }

    if(state){
     return (
         <div className = {styles.replay}>
             <span>{message}</span>
             <span>
                 <Button size="large" variant="contained" onClick = {() => playAgain(players.room)} > Replay </Button>
              </span>
         </div>
     )
    }
}

export default Result