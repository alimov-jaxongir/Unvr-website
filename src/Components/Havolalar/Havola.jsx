import React from 'react'
import img1 from '../../assets/havola/image1.png'
import img2 from '../../assets/havola/image2.png'
import img3 from '../../assets/havola/image3.png'
import img4 from '../../assets/havola/image4.png'
import img5 from '../../assets/havola/image5.png'
import img6 from '../../assets/havola/image6.png'
import './Havola.css'

const Havola=()=> {
  return (
<div className='links'>
    <div className='links__top'>
        <div className='line'></div>
        <p className='title'>Foydali havolalar</p>
    </div>
    <div className='links__box-all'>
    <a href=""><div className='links__box'>
      <img src={img1} className="links__img" alt="" />
      </div></a>
      <a href=""><div className='links__box'>
      <img src={img2} className="links__img" alt="" />
      </div></a>
      <a href=""><div className='links__box'>
      <img src={img3} className="links__img" alt="" />
      </div></a>
      <a href=""><div className='links__box'>
      <img src={img4} className="links__img" alt="" />
      </div></a>
      <a href=""><div className='links__box'>
      <img src={img5} className="links__img" alt="" />
      </div></a>
      <a href=""><div className='links__box'>
      <img src={img6} className="links__img" alt="" />
      </div></a>
      </div>

</div>
  )
}

export default Havola