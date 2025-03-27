// import { useState } from 'react'

import './App.css'

import Header from './pages/Header.tsx'
import Main from './pages/Main.tsx'
import Servicos from './pages/Servicos.tsx'
import QuemSomos from './pages/QuemSomos.tsx'
import Consultoria from './pages/Consultoria.tsx'
import ComoFunciona from './pages/ComoFunciona.tsx'
import Avaliacoes from './pages/Avaliacoes.tsx'
import TrustmaryWidget from './pages/TrustmaryWidget.tsx'
import Localizacao from './pages/Localizacao.tsx'
import Footer from './pages/Footer.tsx'

function App() {
  return (
    <>
    <div className='container'>

      

      <Header />

      <div id="main-section">
          <Main />
      </div>

      <div id="servicos-section">
        <Servicos/>
      </div>

      <div id="consultoria-section">
        <Consultoria />
      </div>

      <div id="como-funciona-section">
          <ComoFunciona />
      </div>
      
      <div id="avaliacoes-section">
        <Avaliacoes/>
        <TrustmaryWidget/>
        <script src="https://widget.trustmary.com/62grob6Iy"></script> 
      </div>

      <div id="localizacao-section">
          <Localizacao />
      </div>

      <div id="quemsomos-section">
          <QuemSomos />
      </div>


      <Footer/>

    </div>

    </>
  )
}

export default App

