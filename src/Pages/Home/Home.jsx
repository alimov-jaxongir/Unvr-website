import React from 'react'
import './Home.css'
import {FcNext} from 'react-icons/fc'
import Card1 from '../../assets/Yangiliklar/card1.png'
import Card2 from '../../assets/Yangiliklar/card2.png'
import Bcard1 from '../../assets/Yangiliklar/bcard1.png'
import Bcard2 from '../../assets/Yangiliklar/bcard2.png'
import Media1 from '../../assets/Media/media1.png'

const Home=()=> {
  return (
    <div className='Home'>
      <div className='News'>
        <div className='News__info'>
          <div className='name'>
          <div className="line"></div>
          <p className='title'>Yangiliklar</p>
          </div>
          <div className='pass'>
            Barchasini ko'rish  <FcNext/>
          </div>
        </div>
          <div className='News__show'>
          <dir className='News__show-top'>
           
            <div className='card'>
             
             <div className="card-title">
               <div className='inside'> Universitetimiz  Gong-Kong universiteti bilan aloqani yo’lga qo’ydi</div>
               </div>
            </div>
          
           
              <div className='card1'>
                <img src={Card1} alt="card" />
                <div className='info'>
                <h4 className='title'>2022-yil Universitetimizda yangi fakultetlar ochilmoqda</h4>
                <div className="description">Vazirlar Mahkamasining «Oliy ta’lim muassasalari pedagog kadrlarini qayta tayyorlash va ularning...</div>
              </div> </div>
              <div className="card1">
               <img src={Card2} alt="card" />
               <div className='info'>
                <h4 className='title'>2022-yil Universitetimizda yangi fakultetlar ochilmoqda</h4>
                <div className="description">Vazirlar Mahkamasining «Oliy ta’lim muassasalari pedagog kadrlarini qayta tayyorlash va ularning...</div>
              </div></div>
           
          </dir>
          <div className='News__show-bottom bott'>
               <div className='card1'>
                <img src={Bcard1} alt="card" />
                <div className='info'>
                <h4 className='title'>2022-yil Universitetimizda yangi fakultetlar ochilmoqda</h4>
                <div className="description">Vazirlar Mahkamasining «Oliy ta’lim muassasalari pedagog kadrlarini qayta tayyorlash va ularning...</div>
              </div> </div>
              <div className="card1">
               <img src={Bcard2} alt="card" />
               <div className='info'>
                <h4 className='title'>2022-yil Universitetimizda yangi fakultetlar ochilmoqda</h4>
                <div className="description">Vazirlar Mahkamasining «Oliy ta’lim muassasalari pedagog kadrlarini qayta tayyorlash va ularning...</div>
              </div></div> 
              <div className='card'>
             
             <div className="card-title">
               <div className='inside'> Universitetimiz  Gong-Kong universiteti bilan aloqani yo’lga qo’ydi</div>
               </div>
            </div> 
          </div>
        </div>
      </div>

      <div className='Info'>
        <div className='Info__box'>
         <div>
           <h2 className='number'>66+</h2>
           <p className='case'>Jami o'qituvchilar</p>
         </div>
        </div>
        <div className='Info__box'>
         <div>
           <h2 className='number'>14+</h2>
           <p className='case'>Fan doktorlaari</p>
         </div>
        </div>
        <div className='Info__box'>
         <div>
           <h2 className='number'>17+</h2>
           <p className='case'>Fan nomzodi,PHD</p>
         </div>
        </div>
        <div className='Info__box'>
         <div>
           <h2 className='number'>35+</h2>
           <p className='case'>Ilmiy darajasiz o'qituvchilar</p>
         </div>
        </div>
      </div>

      <div className="Media">
      <div className='News__info'>
          <div className='name'>
          <div className="line"></div>
          <p className='title'>Media</p>
          </div>
          <div className='pass'>
            Barchasini ko'rish  <FcNext/>
          </div>
        </div>
        <div className='Media__show'>
          <img className='mmm' src={Media1} alt="Images" />
          <img src={Media1} alt="Images" />
          <img src={Media1} alt="Images" />
          <img src={Media1} alt="Images" />
          <img src={Media1} alt="Images" />
          <img src={Media1} alt="Images" />

        </div>

      </div>

      

    </div>
  )
}
export default Home
