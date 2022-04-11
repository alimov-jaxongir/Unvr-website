import React from 'react'
import './Ramz.css'
import Flag from '../../assets/flag.png'

import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

const Bayroq=()=>{
  return(
    <div className='Flag'>
      <img src={Flag} alt="" />
      <div className='Flag__title'>
      O`zbekiston Respublikasi Davlat madhiyasining
      matni va musiqasi O`zbekiston Respublikasining
      1992 yil 10 dekabrdagi 768-XII-sonli
      «O`zbekiston Respublikasining Davlat madhiyasi
      to`g`risida»gi Qonuni bilan tasdiqlangan.
      O`zbekiston Respublikаsining Dаvlаt mаdhiyasi
      O`zbekiston Respublikаsi Dаvlаt suverenitetining rаmzidir
      </div>
    </div>
  )
}
const Gerb=()=>{
  return(
    <div className='Flag'>
      <img src={Flag} alt="" />
      <div className='Flag__title'>
      O`zbekiston Respublikasi Davlat madhiyasining
      matni va musiqasi O`zbekiston Respublikasining
      1992 yil 10 dekabrdagi 768-XII-sonli
      «O`zbekiston Respublikasining Davlat madhiyasi
      to`g`risida»gi Qonuni bilan tasdiqlangan.
      O`zbekiston Respublikаsining Dаvlаt mаdhiyasi
      O`zbekiston Respublikаsi Dаvlаt suverenitetining rаmzidir
      </div>
    </div>
  )
}
const Madhiya=()=>{
  return(
    <div className='Flag'>
      <img src={Flag} alt="" />
      <div className='Flag__title'>
      O`zbekiston Respublikasi Davlat madhiyasining
      matni va musiqasi O`zbekiston Respublikasining
      1992 yil 10 dekabrdagi 768-XII-sonli
      «O`zbekiston Respublikasining Davlat madhiyasi
      to`g`risida»gi Qonuni bilan tasdiqlangan.
      O`zbekiston Respublikаsining Dаvlаt mаdhiyasi
      O`zbekiston Respublikаsi Dаvlаt suverenitetining rаmzidir
      </div>
    </div>
  )
}

const Ramz=()=> {
  return (
    <div className="Ramz">
      <div className="navbar1">
        <ul>
          <li>Bayroq</li>
          <li>Gerb</li>
          <li>Madhiya</li>
        </ul>
      </div>
        
    <Router>
      <Routes>
        <Route path="/"  element={<Bayroq/>} />
        <Route path="gerb" element={<Gerb/>} />
        <Route path="madhiya" element={<Madhiya/>} />

      </Routes>
    </Router>
    </div>
  )
}
export default Ramz
