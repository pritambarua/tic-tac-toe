import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import reportWebVitals from './reportWebVitals';
import Manager from './Manager/Manager';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRoom from './Manager/HomePage/createRoom';
import JoinRoom from './Manager/HomePage/joinRoom';
import Homepage from './Manager/HomePage/Homepage';
import { Box } from '@mui/system';
import styles from './index.module.css'
import Header from './Manager/Header/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <Header></Header>
    <Box component="section" className={styles.box}>
    <Provider store = {store}>
    <BrowserRouter>
    <Routes>
      <Route index element={<Homepage />}></Route>
      <Route path='start' element={<Manager />}></Route>
      <Route path='create' element={<CreateRoom />}></Route>
      <Route path='join' element={<JoinRoom />}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </Box>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
