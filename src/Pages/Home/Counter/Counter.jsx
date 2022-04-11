import React,{useState,useRef,useEffect} from 'react'
import './Counter.css';

const Numeral=()=>{
  return(
      <></>
  )
}




const Counter=()=> {
  
  return (
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
  )
}

export default Counter