import { createSlice } from "@reduxjs/toolkit";

const turns = {
    PENDING: 0,
    COMPLETED: 1,
    WAITING: 2
}

const game = {
    LEFT: 0,
    COMPLETED: 1
}

const initialState = {
    currentPlayer: {
        id: 0,
        state: turns.WAITING
    },
    board: new Array(3).fill(' ').map(() => new Array(3).fill(' ')),
    gameState: game.LEFT,
}

export const controller = createSlice({
    name: 'controller',
    initialState,
    reducers: {
        turnPlayed: (state, action)=> {
            const {row, col} = action.payload;
            state.board[row][col] = !state.currentPlayer.id ? 'X' : 'O';
            //state.currentPlayer.state = turns.COMPLETED;
            state.currentPlayer.id = state.currentPlayer.id === 1 ? 0 : 1;
        },
    }
});

export const {turnPlayed} = controller.actions;
export const currentPlayer = state => state.controller.currentPlayer;
export const board = state => state.controller.board;
export const gameState = state => state.controller.gameState;
export default controller.reducer;


