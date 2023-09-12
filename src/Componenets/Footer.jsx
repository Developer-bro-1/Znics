import React from 'react'

const Footer = () => {
  return (
<section className='footer'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 col-xl-5'>
                <div className='footer-about'>
                    <h3 className=''><span className='cl-chang'>Z</span>nics</h3>
                    <p className=''> As a passionate MERN stack developer and seasoned app creator, I thrive in the world of technology.<br/> 
                    With a strong foundation in web development using MongoDB, Express, React, and Node.js .<br/> I craft elegant and
                        efficient web solutions that bring ideas to life on the internet.</p>
                </div>
            </div>
            <div className='col-md-6 col-xl-3'>
                <div className='useful-link'>
                    <h3 className=''><span className='cl-chang'>U</span>seful Links</h3>
                    <div className='footer-links'>
                        <a className='' href="#home"> Home </a>
                        <a className='' href="#work"> Work </a>
                        <a className='' href="#timeline"> Experience </a>
                        <a className='' href="#services"> Services </a>
                        <a className='' href="#testimonial"> Testimonial </a>
                        <a className='' href="#contact"> Contact Us </a>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-xl-4'>
                <div className='footer-contact'>
                    <h3 className=''><span className='cl-chang'>C</span>ontact Us</h3>
                    <p>Let's collaborate and turn your digital dreams into a tangible reality!</p>
                    <p>Email: Znicstechofficial@gmail.com</p>
                    <a href="#contact" className='free-q'>Free Quote</a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer