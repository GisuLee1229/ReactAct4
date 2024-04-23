import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleAllTextVisibility, showText }) => {
    return (
        <div className='p-8 flex justify-end gap-5 font-bold bg-sky-950'>
            <Link to='/' className='text-white hover:text-black hover:bg-white rounded-md'>Home</Link>
            <Link to='/about' className='text-white hover:text-black hover:bg-white rounded-md'>About</Link>
            <Link to='/contact' className='text-white hover:text-black hover:bg-white rounded-md'>Contact</Link>
        </div>
    );
}

export default Header;