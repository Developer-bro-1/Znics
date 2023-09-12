import React from 'react'
import data from "../assets/data.json"
import {Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Work = () => { 
  return (
    <div id='work' className='main-work'>
      <section className='main-work-sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='main-title-work text-center'>
                <div className='title-work'><span className='cl-chang'>W</span>ork</div>
              </div>
              <Carousel className='carosal' 
              showArrows={true} 
              showStatus={false}
              showIndicators={false} 
              infiniteLoop={2000}
              autoPlay={true}
              showThumbs={false}
              >
              {
                data.projects.map((i)=>(
                  <div key={i.title} className='workItem'>
                    <img src={i.imgSrc} alt={i.title}/>
                    <aside>
                      <h3 className='my-work-h3'>{i.title}</h3>
                      <p className='my-work-p' >{i.description}</p>
                      <a className='my-work-btn' target="_blank" rel="noopener noreferrer" href={i.url}>
                        View Demo
                      </a>
                    </aside>
                  </div>
                ))
              }
              </Carousel>
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Work