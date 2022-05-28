import {configureStore} from '@reduxjs/toolkit';
import initializePlayersReducer from './Manager/PlayerForm/initializePlayers';
import GameControllerConfig from './Manager/Board/GameController.config';

export const store = configureStore({
    reducer: {
        initializePlayers: initializePlayersReducer,
        controller: GameControllerConfig,
    },
})