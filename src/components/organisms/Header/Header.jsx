import React from 'react';

import './Header.scss';
import SearchField from '../../molecules/SearchField/SearchField';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='header_title'>
        <p className='header_title__text'>videoteca</p>
      </NavLink>
      <SearchField />
    </header>
  );
};

export default Header;
