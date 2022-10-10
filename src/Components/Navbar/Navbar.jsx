import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <nav>
        <div className="mainDiv">
          <div className='okkks'>
            <p>GrowSkill</p>
          </div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/blog">blog</Link>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar