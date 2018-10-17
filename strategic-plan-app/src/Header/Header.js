import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return(
        <div>
            <header className="header-wrapper">
                <h2>Atruity</h2>
<<<<<<< HEAD
                <Link to='/'><img src="/home_icon_white.png" alt="Home"/></Link>
                <Link to='/plan/mvv'><img src="/plan_icon_white.png" alt="Plan"/></Link>
                <Link to='/projects'><img src="/projects_icon_white.png" alt="Projects"/></Link>
                <Link to='/reports'><img src="/reports_icon_white.png" alt="Reports"/></Link>
                <Link to='/learn'><img src="/learn_icon_white.png" alt="Learn"/></Link>
=======
                <nav>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/plan/mvv'>Plan</Link>
                        <Link to='/projects/project'>Projects</Link>
                        <Link to='/reports'>Reports</Link>
                        <Link to='/learn'>Learn</Link>
                    </ul>
                </nav>
>>>>>>> 39a606561aa981e21ede5b9616bce7065f60cfb5
            </header>
        </div>
    )
  }

export default Header;