import React from 'react';
import './Header.css';
import  unvrLogo from '../../assets/header/unvr-logo.png';
import langLogo from '../../assets/header/language-logo.svg';
import flag from '../../assets/header/flag.png';
import gerb from '../../assets/header/gerb.png';
import madhiya from '../../assets/header/madhiya.png';
import Navbar from './Navbar/Navbar';



const  Header=()=>{
  return (
    <div className="header">
      <div className='header__top'>
        <div className='header__top-left'>
          <img src={unvrLogo} className="logo" alt="University logo" />
          <h5 className='header__top-left__title'>Amaliy matematika va intelektual texnologiyalar fakulteti</h5>
        </div>
        <div className='header__top-right'>
         <div className='ramz'>
           <img src={flag} alt="Flag" />
           <img src={gerb} alt="Gerb" />
           <img src={madhiya} alt="Madhiya" />
          </div> 
          <div className='language'>
            <img src={langLogo} className='language-logo' alt="" />
            <p className='title'>O'zbek</p>
          </div>
          <div className='number'>
           <p className='number-title'>+71 123-45-67</p>
          </div>
        </div>

      </div>
      <div className='line'></div>
      <div className='header__navbar'>
        <Navbar/>
      </div>
    </div>
  )
}
export default Header
