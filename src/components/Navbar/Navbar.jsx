import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {AiOutlineHome} from 'react-icons/ai';
import {BiBookAlt,BiMessageSquareDetail,BiUser} from 'react-icons/bi';
import {GiSkills} from 'react-icons/gi';


import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const[activateNav, setActivateNav] = useState('#home');

  return (
    <nav className="navbar">
      <a href="#home" onClick={()=>setActivateNav('#home')} className={activateNav=== '#home' ?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActivateNav('#about')} className={activateNav=== '#about' ?'active':''}><BiUser/></a>
      <a href="#work"onClick={()=>setActivateNav('#work')} className={activateNav=== '#work' ?'active':''}><BiBookAlt/></a>
      <a href="#skills"onClick={()=>setActivateNav('#skills')} className={activateNav=== '#skills' ?'active':''}><GiSkills/></a>
      <a href="#contact"onClick={()=>setActivateNav('#contact')} className={activateNav=== '#contact' ?'active':''}><BiMessageSquareDetail/></a>

    </nav>
  );
};

export default Navbar;