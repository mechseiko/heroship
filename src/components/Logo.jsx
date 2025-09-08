import React from 'react';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom';

const Logo = () => { 
    return (
        <Link to="/" className='flex text-center'>
            <img src={logo} alt="Heroship Logo" className="size-10 mx-2" />
            <h1 className='font-semibold leading-tight text-secondary text-[27px]'>Heroship</h1>
        </Link>
    );
}

export default Logo;