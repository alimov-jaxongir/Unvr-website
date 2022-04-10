import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Havola from './Components/Havolalar/Havola';
import Home from './Pages/Home/Home';
import Yangiliklar from './Pages/Yangiliklar/Yangiliklar'
import Tuzilma from './Pages/Tuzilma/Tuzilma'
import NotFound from './Pages/Not Found/NotFound';
import Ramz from './Pages/Ramz/Ramz';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path="yangiliklar" element={<Yangiliklar/>}/>
          <Route path="tuzilma" element={<Tuzilma/>}/>
          <Route path="notfound" element={<NotFound/>}/>
          <Route path="ramz" element={<Ramz/>}  />
        </Routes>
      </Router>
      
      <Havola/>
      <Footer/>
    </div>
  );
}

export default App;
