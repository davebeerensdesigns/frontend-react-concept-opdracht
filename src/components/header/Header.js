import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from '../../assets/logo.png';
import './Header.css';

function Header({children}) {
    return (
        <header className='header'>
            <div className='container'>
                <nav>
                    <NavLink to="/">Hottest posts</NavLink>
                    <a href="https://www.reddit.com" target='_blank'>Reddit</a>
                    <NavLink to="/subreddit/memes">Memes</NavLink>
                </nav>

                <div className='title'>
                    {children}
                </div>
            </div>
        </header>
    );
}

export default Header;