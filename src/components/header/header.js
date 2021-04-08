import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-block'>
            <div className='header-title'>
                <Link to='/'>
                    Game of Thrones DB
                </Link>
            </div>
            <ul className='header-links'>
                <li>
                    < Link to='/characters/' className='header-link'>Characters</Link>
                </li>
                <li>
                    < Link to='/houses/' className='header-link'>Houses</Link>
                </li>
                <li>
                    < Link to='/books/' className='header-link'>Books</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;

