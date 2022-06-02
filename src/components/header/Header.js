import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from '../../assets/logo.png';
import './Header.css';

function Header(props) {
    return (
        <header className='header'>
            <div className='container'>
                <nav>
                    <NavLink to="/">Hottest posts</NavLink>
                    <NavLink to="/subreddit">Reddit</NavLink>
                    <NavLink to="/subreddit/memes">Memes</NavLink>
                </nav>
                <figure className='logo'>
                    <img src={Logo}/>
                </figure>
            </div>
        </header>
    );
}

export default Header;