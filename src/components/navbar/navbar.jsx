import React from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" />
      <ul className='navbar-menu'>
      <li>home</li>
      <li>menu</li>
      <li>mobile-app</li>
      <li>contact-us</li>
      </ul>
      <div className="navbar-right">
        <img src="{asserts.search_icon}" alt="" />

      </div>
    </div>
  )
}

export default Navbar;
