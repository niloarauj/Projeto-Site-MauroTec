// import { useState } from 'react'

import './App.css'

import Header from './pages/Header.tsx'
import Main from './pages/Main.tsx'
import Footer from './pages/Footer.tsx'
import Servicos from './pages/Servicos.tsx'

function App() {
  return (
    <>
    <div className='container'>

      <Header />

      <Main/>
      <Servicos/>
      <Footer/>


    </div>

    </>
  )
}

export default App

