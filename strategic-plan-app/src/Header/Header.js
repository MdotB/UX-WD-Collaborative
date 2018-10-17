import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return(
        <div>
            <header className="header-wrapper">
                <h2>Atruity</h2>
                <nav>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/plan/mvv'>Plan</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/reports'>Reports</Link>
                        <Link to='/learn'>Learn</Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
  }

export default Header;