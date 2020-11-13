import '../styles/global.css';
import  '../styles/page_landing.css';
import logo from '../img/logo.svg'
import landing from '../img/landing.svg' 
import {FiArrowRight} from 'react-icons/fi'
import React from 'react'
import {Link} from 'react-router-dom'

function Landing(){

    return(
        <div id="page_landing">
      <div className="content-wrapper">
        <img src={logo} alt=""/>
        
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>Madureira</span>
        </div>
        <Link to="/app"  className="enter-app">
        <FiArrowRight size={26} color="rgba(0,0,0,.6)" />
        </Link>
      </div>
    </div>

    )
}

export default Landing;
