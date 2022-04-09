import React from 'react'
import './Navbar.css'
import {NavLink, Link} from 'react-router-dom'

const Navbar=()=> {
  return (
    <div className='navbar'>
    <div className='navbar__list'>
      <ul>
       <li>Yangiliklar</li>
       <li>Tuzilma</li>
       <li>Madaniy-ma'rifiy</li>
       <li>Media</li>
       <li>Fakultet haqida</li>
       <li>Aloqa</li>
      </ul>
    </div>
    <div className='navbar__form'>
       <input type="text" className='navbar__form-search' placeholder="Qidiruv" />
       <button className='navbar__form-submit'><span> Shaxsiy kabinet</span></button>
    </div>
    </div>
    
  )
}

export default Navbar
