import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return(
        <div className="header-container">
            <header className="header-wrapper">
                <h2>Atruity</h2>
                <Link to='/'><img src="/home_icon_white.png" alt="Home"/></Link>
                <Link to='/plan/create-mvv'><img src="/plan_icon_white.png" alt="Plan"/></Link>
                <Link to='/projects'><img src="/projects_icon_white.png" alt="Projects"/></Link>
                <Link to='/reports'><img src="/reports_icon_white.png" alt="Reports"/></Link>
                <Link to='/learn'><img src="/learn_icon_white.png" alt="Learn"/></Link>
            </header>
        </div>
    )
  }

export default Header;