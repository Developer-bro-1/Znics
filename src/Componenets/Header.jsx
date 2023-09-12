import React from 'react'

import MyImage from "../assets/logo.png";
const Header = () => {
  return (
    <>
    <nav>
        <NavContent/>
    </nav>
    </>
  )
}

const NavContent = ()=>(
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
    <div className="container">
        <a className="navbar-brand" href="#"><img className="my-logo" src={MyImage} alt="Logo" />;</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#timeline">Experience</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#services">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#testimonial">Testimonial</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#contact" >Contact</a>
            </li>
        </ul>
        <a href="mailto:official.znicstechofficial@gmail.com">
            <button className='mail-btn'>Email</button>
        </a>
        </div>
    </div>
</nav>
)

export default Header

