import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Homepage() {
  return (
      <>
           <nav>
               <ul>
                   <li><Link to="/create"> Create Room </Link></li>
                   <li><Link to="/join"> Join Room </Link></li>
               </ul>
           </nav>
           
           <Outlet />
      </>
  )
}

export default Homepage