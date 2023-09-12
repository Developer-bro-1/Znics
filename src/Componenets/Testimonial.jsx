import React from 'react'

const testimonial = () => {
  return (
    <div id="testimonial">
      <section className='testimonial-sec my-sec-test-1'>
      <div className='main-title-work text-center '>
          <div className='title-work testi-nam'><span className='cl-chang'>T</span>estimonial</div>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4 col-xl-4'>
              <TestimonialCard name={"Miles J."} feedback={"I had the pleasure of working with Hammad on a recent project, and I am extremely impressed with their website and app development skills. Hammad and their team demonstrated exceptional technical expertise, a keen eye for design, and a deep understanding of user experience."}/>
            </div>
            <div className='col-md-4 col-xl-4'>
              <TestimonialCard name={"Harvey M."} feedback={"Hammad has been instrumental in helping us bring our digital ideas to life. Their web and app development services are top-notch, and their team is professional and reliable. The websites and apps they have created for us have been both visually appealing and highly functional."}/>
            </div>
            <div className='col-md-4 col-xl-4'>
              <TestimonialCard name={"Harvey G."} feedback={"Working with Hammad on our website and app development project has been an incredible experience. They took our vision and turned it into a fully functional and aesthetically pleasing reality. What sets Hammad apart is their ability to listen to their clients, offer creative solutions, and execute with precision."}/>
            </div>
        </div>
      </div>
      </section>
      <section className='testimonial-sec my-sec-test-2'>
        <div className='main-title-work text-center '>
            <div className='title-work testi-nam'><span className='cl-chang'>T</span>estimonial</div>
        </div>
        <div className='container'>
          <div className='row'>
          <div className='col-md-1'></div>
              <div className='col-md-5'>
                <TestimonialCard name={"Miles J."} feedback={"I had the pleasure of working with Hammad on a recent project, and I am extremely impressed with their website and app development skills. Hammad and their team demonstrated exceptional technical expertise, a keen eye for design, and a deep understanding of user experience."}/>
              </div>
              <div className='col-md-5'>
                <TestimonialCard name={"Harvey M."} feedback={"Hammad has been instrumental in helping us bring our digital ideas to life. Their web and app development services are top-notch, and their team is professional and reliable. The websites and apps they have created for us have been both visually appealing and highly functional."}/>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md'></div>
              <div className='col-md-5 my-test-pt'>
                <TestimonialCard name={"Harvey G."} feedback={"Working with Hammad on our website and app development project has been an incredible experience. They took our vision and turned it into a fully functional and aesthetically pleasing reality. What sets Hammad apart is their ability to listen to their clients, offer creative solutions, and execute with precision."}/>
              </div>
              <div className='col-md'></div>
          </div>
        </div>
      </section>
      <section className='testimonial-sec my-sec-test-3'>
        <div className='main-title-work text-center '>
            <div className='title-work testi-nam'><span className='cl-chang'>T</span>estimonial</div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-1'></div>
              <div className='col-sm-10'>
                <TestimonialCard name={"Miles J."} feedback={"I had the pleasure of working with Hammad on a recent project, and I am extremely impressed with their website and app development skills. Hammad and their team demonstrated exceptional technical expertise, a keen eye for design, and a deep understanding of user experience."}/>
              </div>
            <div className='col-sm-1'></div>
            <div className='col-sm-1'></div>
              <div className='col-sm-10 my-test-pt'>
                <TestimonialCard name={"Harvey M."} feedback={"Hammad has been instrumental in helping us bring our digital ideas to life. Their web and app development services are top-notch, and their team is professional and reliable. The websites and apps they have created for us have been both visually appealing and highly functional."}/>
              </div>
              <div className='col-sm-1'></div>
              <div className='col-sm-1'></div>
              <div className='col-sm-10 my-test-pt'>
                <TestimonialCard name={"Harvey G."} feedback={"Working with Hammad on our website and app development project has been an incredible experience. They took our vision and turned it into a fully functional and aesthetically pleasing reality. What sets Hammad apart is their ability to listen to their clients, offer creative solutions, and execute with precision."}/>
              </div>
              <div className='col-sm-1'></div>
          </div>
        </div>
      </section>
    </div>
  )
}
const TestimonialCard=({name, feedback})=>(
  <article className='main-article'>
    <img className='artic-img' src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
    <div className='main-test-des'>
      <h5 className='main-test-name'>{name}</h5>
      <p>{feedback}</p>
    </div>
  </article>
)
export default testimonial