import { Link } from '@mui/material'
import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <span className = {styles.footer}>
        Made with <div className = {styles.love}> ♥ </div> by  &nbsp;
        <Link 
        color="white" 
        href="https://www.linkedin.com/in/pritam-barua-41a978103/" 
        underline="hover"
        target="_blank"> Pritam</Link>
    </span>
  )
}

export default Footer