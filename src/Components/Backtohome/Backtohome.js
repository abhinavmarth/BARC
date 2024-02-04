import React from 'react'
import Logo from '../../Assests/Logo.png';
import { RiArrowGoBackFill } from "react-icons/ri";
import '../Navbar/Navbar.css';
import {Link as Jump} from 'react-router-dom';
const Backtohome = () => {
  return (
    <div>
        <nav className='navbar'>
        <Jump to="/"><img src={Logo} alt="beauty" className='logo'/></Jump>
        <Jump to="/" className='backToHome'  >
            Back To Home
            <div className='backToHomeImg'><RiArrowGoBackFill /></div>
        </Jump>
        </nav>
    </div>
  )
}

export default Backtohome