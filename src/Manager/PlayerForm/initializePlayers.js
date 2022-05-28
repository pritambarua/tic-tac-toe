import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        player0: '',
        player1: '',
    }
}

export const initializePlayers = createSlice({
    name: 'initializePlayers',
    initialState,
    reducers: {
        handleChange : (state, action) => {
            const {name, value} = action.payload;
            state.value[name] = value; 
        }
    }
});

export const {handleChange} = initializePlayers.actions;
export const names = (state) => state.initializePlayers.value;
export default initializePlayers.reducer;