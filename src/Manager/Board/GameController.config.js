import { doc, updateDoc } from "@firebase/firestore";
import { createSlice } from "@reduxjs/toolkit";
import db from "../../firebase.config";
import { checkWinner, serialize } from "../Helpers/helper";


const initialState = {
    currentPlayer: '1',
    board: new Array(3).fill(' ').map(() => new Array(3).fill(' ')),
    gameState: false,
    chancesLeft : 9
}

export const controller = createSlice({
    name: 'controller',
    initialState,
    reducers: {
        changeChancesleft: (state, action) => {
            state.chancesLeft = action.payload
        },
        changeTurn: (state, action) => {
            state.currentPlayer = action.payload
        },
        changeGameOver: (state, action) => {
            state.gameState = action.payload;
        },
        changeBoardState: (state, action) => {
            state.board = action.payload;
        },
        turnPlayed: (state, action)=> {
            
            const {row, col, roomCode} = action.payload;
            state.board[row][col] = state.currentPlayer === '1' ? 'X' : 'O';
            let gotWinner = checkWinner(state.board, row, col);
            if(gotWinner){
                state.gameState = true;
            } else {
                state.chancesLeft -= 1;
                state.currentPlayer = state.currentPlayer === '1' ? '2' : '1';
            }

            const roomRef = doc(db, "Gamerooms", roomCode);
            updateDoc(roomRef, {
                board: serialize(state.board),
                turn: state.currentPlayer,
                chancesLeft: state.chancesLeft,
                gameOver: state.gameState
            }).then(() => {
                
            }).catch((error) => {
                alert('No such Room Code Exist')
            })
        },
    }
});

export const {turnPlayed, changeBoardState, changeGameOver, changeTurn, changeChancesleft} = controller.actions;
export const currentPlayer = state => state.controller.currentPlayer;
export const board = state => state.controller.board;
export const gameState = state => state.controller.gameState;
export const chancesLeft = state => state.controller.chancesLeft;
export default controller.reducer;


