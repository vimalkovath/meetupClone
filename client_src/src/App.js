import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Main from './components/Main'
import Navbar from './components/Navbar'
import {Link} from 'react-router-dom'

const App =()=> (

      <div >
        <Navbar/>
        <div className="container">
<Main/>

  <div className="fixed-action-btn">
    <Link to="/meetups/add" className="btn-floating btn-large red">
      <i className="fa fa-plus"></i>
    </Link>

  </div>
        
      </div>   </div>
    );
  

export default App;
