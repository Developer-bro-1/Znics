import { useState } from 'react'
import './App.css'
import Testimonial from './Componenets/testimonial'
import Header from './Componenets/Header'
import Home from './Componenets/Home'
import Work from './Componenets/WOrk'
import Timeline from './Componenets/Timeline'
import Services from './Componenets/Services'
import Contact from './Componenets/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './Componenets/Footer'

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Work/>
    <Timeline/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>
  )
}
export default App