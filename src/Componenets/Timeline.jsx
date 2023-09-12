import React from 'react';
import data from "../assets/data.json";

const Timeline = () => {
  const leftHeadings = [1, 2]; // 3rd and 5th headings
  const rightHeadings = [3,4]; // 2nd, 4th, and 6th headings
  const middileHeadings = [5,6];

  return (
    <> 
     
    <div id='timeline'>
      <div className='timelinebox'>
      <div className='container my-margin'>
        <div className='row'>
          <div className='col-md-12'>
          <div className='main-title-work text-center'>
                <div className='title-work experience-title'><span className='cl-chang'>E</span>xperience</div>
              </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-xl-4'>
              <div className='timeline-left' style={{animationDelay: "0.3sec",}}>
                {leftHeadings.map((index) => {
                  const item = data.experience[index - 1]; // Adjusting for 0-based index
                  return (
                    <div key={item.title} className='Timeline'>
                      <a className='my-Timeline-btn' target="_blank" rel="noopener noreferrer" href={item.url}>
                        <h3 className='my-Timeline-h3'>{item.title}</h3>
                        <h5 className='my-Timeline-p'>{item.date}</h5>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-xl-4'>
              <div className='middile-left' style={{animationDelay: "0.3sec",}}>
                {middileHeadings.map((index) => {
                  const item = data.experience[index - 1]; // Adjusting for 0-based index
                  return (
                    <div key={item.title} className='Timeline'>
                      <a className='my-Timeline-btn' target="_blank" rel="noopener noreferrer" href={item.url}>
                        <h3 className='my-Timeline-h3'>{item.title}</h3>
                        <h5 className='my-Timeline-p'>{item.date}</h5>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-xl-4'>
              <div className='timeline-right'>
                {rightHeadings.map((index) => {
                  const item = data.experience[index - 1]; // Adjusting for 0-based index
                  return (
                    <div key={item.title} className='Timeline'>
                      <a className='my-Timeline-btn' target="_blank" rel="noopener noreferrer" href={item.url}>
                        <h3 className='my-Timeline-h3'>{item.title}</h3>
                        <h5 className='my-Timeline-p'>{item.date}</h5>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Timeline;
