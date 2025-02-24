import React, { useState } from 'react'
import Search from './searchBar'
import Logo from './logo'
import NumResult from './NumResult'

const NavBar = ({children}:any) => {
    
  return (
   <>
   <nav className="nav-bar">
   <Logo/>{children}
      </nav>
   </>
  )
}

export default NavBar
