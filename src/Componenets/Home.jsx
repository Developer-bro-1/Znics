import React from 'react'
import {animate, motion} from "framer-motion"
import Typewriter from "typewriter-effect"
import {BsArrowUpRight} from "react-icons/bs"
import { useRef } from 'react';
import img from "../assets/img.png"
/**********************My Home Section*******************************************/
const Home = () => { 
  const clientCount = useRef(null);
  const AnimationCount=()=>{
      animate(0,100,{
        duration:1,
        onUpdate: (v)=>(clientCount.current.textContent = v.toFixed()),
      })
  }
  return (
    <>
    <div id='home'>
      <section className='home-section'>
        <div className='container our-padding-under'>
          <div className='row'>
            <div className='col-md-6 col-sm-12 order-2 order-md-1'>
              <div className='my-h1'>
              <motion.h1
                  initial={{
                    x: "-100%",
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }} 
                >
                <span className='Hamma'>Hi, I Am <br /> Hammad Rehman</span>
                </motion.h1>
                <div className='type-writer'>
                <Typewriter options={{
                  strings:["Creative Developer", "Mern Stack Developer", "App Developer"],
                  autoStart: true,
                  loop:true,
                  wrapperClassName: "typewriterpara",
                  cursor: "",
                }}/>
                </div>
                <div className='btns'>
                  <a className="email-btn" href="mailto:official.znicstechofficial@gmail.com">
                    Hire me
                  </a>
                  <a className="project-btn"href="#work">Projects <BsArrowUpRight/></a>
                </div>
              </div>
              +<motion.span whileInView={AnimationCount} ref={clientCount}></motion.span>
            </div>
            <div className='col-md-6 col-sm-12 order-1 order-md-2'>
            <div className='main-img-1'>
                <img src={img} alt='Hammad Rehman'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home