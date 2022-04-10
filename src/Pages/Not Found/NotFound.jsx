import React from 'react'
import  './notFound.css'
import notFound from '../../assets/notfound.png'
import {FcPrevious} from 'react-icons/fc'

const NotFound=()=> {
  return (
    <div className='Notfound'>
      <img src={notFound} className="Notfound__img" alt="NotFound" />
      <p className='Notfound__title'>Bu sahifa topilmadi.Bosh sahifaga qayting</p>
      <div className='Notfound__btn'> <span className='Prev'><FcPrevious  /></span>  Bosh sahifa </div>
    </div>
  )
}

export default NotFound