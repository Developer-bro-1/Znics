import React from 'react'
import {motion} from "framer-motion"
import {AiFillIeCircle,AiFillAndroid, AiFillWindows} from "react-icons/ai"
const Services = () => {
  const animations ={
    whileInView: {
      x:0,
      y:0,
      opacity:1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndthree: {
      opacity: 0,
      y: "100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
  }
  return (
    <>
    <section id ="services" className='services-sec'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
              <div className='main-title-work text-center'>
                <div className='title-work serv-nam'><span className='cl-chang'>S</span>ervices</div>
              </div>
          </div>
          <div className='col-sm-12 col-md-4 mt-5'>
            <motion.div className='service-box1 service-box' whileInView={animations.whileInView} initial={animations.one}>
              <h3>3+</h3>
              <p>Years Experience</p>
            </motion.div>
          </div>
          <div className='col-sm-12 col-md-8 mt-5 my-mt-4'>
            <div className='row'>
              <div className='col-6 col-sm-6 col-md-6'>
                <motion.div className='service-box2 service-box' whileInView={animations.whileInView} initial={animations.twoAndthree}>
                  <AiFillIeCircle/>
                  <span>Web Development</span>
                </motion.div>
              </div>
              <div className='col-6 col-sm-6 col-md-6'>
                <motion.div className='service-box3 service-box' whileInView={animations.whileInView} initial={animations.twoAndthree}>
                  <AiFillAndroid/>
                  <span>App Development</span>
                </motion.div>
              </div>
            </div>
            <motion.div className='service-box4 service-box' transition={{delay: 0.2,}} whileInView={animations.whileInView} initial={animations.four}>
              <AiFillWindows/>
              <span>Desktop Development</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Services