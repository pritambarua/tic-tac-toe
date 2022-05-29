import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        player1: '',
        player2: '',
        room: '',
        myself: ''
    }
}

export const initializePlayers = createSlice({
    name: 'initializePlayers',
    initialState,
    reducers: {
        handleNameChange : (state, action) => {
            const {name, value} = action.payload;
            state.value[name] = value; 
        },
        handleRoomChange: (state, action) => {
            const {roomCode} = action.payload;
            state.value.room = roomCode;
        },
        handleMyself: (state, action) => {
            state.value.myself = action.payload;
        }
    }
});

export const {handleNameChange, handleRoomChange, handleMyself} = initializePlayers.actions;
export const data = (state) => state.initializePlayers.value;
export default initializePlayers.reducer;