import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className = "header">
        <h1>Mission Control</h1>
        {/* <Link to="/">Mission Control</Link> */}
        <div className="links">
          <Link to="/graphs">Graphs</Link>
          
        </div>
    </div>
  )
}

export default Header