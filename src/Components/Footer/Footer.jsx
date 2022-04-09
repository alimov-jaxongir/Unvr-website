import React from 'react'
import unvrLogo from '../../assets/header/unvr-logo.png'
import './Footer.css'
import {FiPhone} from 'react-icons/fi'
import {CgFacebook} from 'react-icons/cg'
import {IoLogoInstagram} from 'react-icons/io'
import {FiTwitter} from 'react-icons/fi'
import {FaTelegramPlane} from 'react-icons/fa'

 const Footer=()=> {
  return (
    <div className='footer'>
        <div className='footer__top'>
         <div className='footer__top-logo'>
           <img src={unvrLogo} className="footer__top-logo--logo" alt="University logo" />
           <h5 className='footer__top-logo--title'>Amaliy matematika va intelektual texnologiyalar fakulteti</h5>
         </div>
         <div className='footer__top-form'>
             <input type="email" className='footer__top-form--email' placeholder='E-mail' />
             <div className="footer__top-form--submit">Yuborish</div>
         </div>
        </div>
        <div className="footer__nav">
            <div className='footer__navbar'>
            <ul>
       <li>Yangiliklar</li>
       <li>Tuzilma</li>
       <li>Madaniy-ma'rifiy</li>
       <li>Media</li>
       <li>Fakultet haqida</li>
       <li>Aloqa</li>
      </ul>
            </div>
            <div className='footer__nav-number'>
              <p className='number'><FiPhone className='logo'/>+71 200-11-12</p>
              <p className='number'><FiPhone className='logo'/>+71 200-11-12</p>
            </div>

        </div>
        <div className='line'></div>
        <div className="footer__bottom">
         <p className='footer__bottom-title'>Saytdagi malumotlar himoyalangan va ulardan qayta foydalanish taqiqlanadi</p>
        <div className='footer__bottom-social'>
          <a href="#"> <div href='' className='wrapper'><CgFacebook className='icon'/></div></a>
          <a href="#"> <div href='' className='wrapper'><IoLogoInstagram className='icon'/></div></a>
          <a href="#"> <div href='' className='wrapper'><FiTwitter className='icon'/></div></a>
          <a href="#"> <div href='' className='wrapper'><FaTelegramPlane className='icon'/></div></a>
        </div>
        </div>

    </div>
  )
}
export default Footer
