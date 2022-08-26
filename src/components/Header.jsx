import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
           <Link to="/"> MOVIES APP</Link>
              <Link to="/wishlist">
              <a>WISHLIST</a></Link>
        </div>
    )
}

export default Header

