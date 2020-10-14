import React from 'react'

import { Link } from 'react-router-dom'

import {FiArrowRight}  from 'react-icons/fi'

import '../styles/pages/landing.css'

import logoImg from '../images/Logo.svg'
function Landing(){

    return (
        <div id="page-landing">
          <div className="content-wrapper">
            <img src = {logoImg} alt = "head"/>
            <main>
              <h1>Leve felicidade para o mundo</h1>
              <p>Visite os orfanatos e mude o dia de mutias crianças.</p>
            </main>
            <div className="location">
              <strong>Araxa</strong>
              <span>Minas Gerais</span>
            </div>
    
            <Link to= "/app" className = "enter-app">
              <FiArrowRight size ={26} color = "rgba(0,0,0,0.6)" />
            </Link>
    
          </div>  
        </div>
    )
}

export default Landing