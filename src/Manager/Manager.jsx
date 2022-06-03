import React, { useEffect } from 'react'
import Board from './Board/GameController'
import { doc, getDoc, onSnapshot } from '@firebase/firestore';
import db from '../firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { data, handleNameChange } from './HomePage/initializePlayers';
import { board, chancesLeft, changeBoardState, changeChancesleft, changeGameOver, changeTurn, currentPlayer, gameState } from './Board/GameController.config';
import { deserialize } from './Helpers/helper';

function Manager() {

  const players = useSelector(data);
  const boardData = useSelector(board);
  const playerTurn  = useSelector(currentPlayer);
  const state = useSelector(gameState);
  const chances = useSelector(chancesLeft);
  const docRef = doc(db, "Gamerooms", players.room);
  const dispatch = useDispatch();

  useEffect(() => {
    getDoc(docRef)
    .then((item) => {
      const {player1 , player2} = item.data();
      dispatch(handleNameChange({name: 'player1', value: player1}));
      dispatch(handleNameChange({name: 'player2', value: player2}));
    });

    onSnapshot(docRef, (doc) => {
      console.log(doc.data());
      const {board: fetchedboard, gameOver, turn, chancesLeft} = doc.data();
      const ans = deserialize(fetchedboard);
      dispatch(changeBoardState(ans));
      dispatch(changeGameOver(gameOver));
      dispatch(changeTurn(turn));
      dispatch(changeChancesleft(chancesLeft));
    });



  }, []);

  return (
    <>
        <Board board={boardData} state={state} turn={playerTurn} isDisabled = {players.myself !== playerTurn}></Board>
        {state ?
        chances === 0 ? 'Its a Draw' : `Hurrah ${players[`player${playerTurn}`]}  won` : ''}
    </>
  )
}

export default Manager