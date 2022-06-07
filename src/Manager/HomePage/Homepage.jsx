import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './Homepage.module.css'
import Button from '@mui/material/Button';

function Homepage() {

  return (
    
      <div className={styles.homepage}>
      <Button size="large" variant="contained" component={Link} to="/create">Create Room</Button>
      <Button size="large" variant="contained" component={Link} to="/join"> Join Room </Button>
      <Outlet />
      </div>
  )
}

export default Homepage