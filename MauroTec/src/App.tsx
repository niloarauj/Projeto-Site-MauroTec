// import { useState } from 'react'

import './App.css'

import Header from './pages/Header.tsx'
import Main from './pages/Main.tsx'
import Servicos from './pages/Servicos.tsx'
import QuemSomos from './pages/QuemSomos.tsx'
import Consultoria from './pages/Consultoria.tsx'
import ComoFunciona from './pages/ComoFunciona.tsx'
import Avaliacoes from './pages/Avaliacoes.tsx'

import Footer from './pages/Footer.tsx'

function App() {
  return (
    <>
    <div className='container'>

      <Header />

      <Main/>
      <Servicos/>
      <Consultoria/>
      <ComoFunciona/>

      <Avaliacoes/>

      <QuemSomos/>



      <Footer/>


    </div>

    </>
  )
}

export default App

