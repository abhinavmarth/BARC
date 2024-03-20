import React from 'react'
import Skills from '../Skills/Skills.js';
import Contact from '../Contact/Contact.js';
import Intro from '../Intro/Intro.js';
import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import Navbar from '../Navbar/Navbar.js';
const Layout = () => {
  return (
    <div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout