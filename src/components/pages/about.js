import React from 'react';
import aboutImage from '../../../static/assets/images/auth/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg'

export default function(props){
       return(
         <div className='about-page-wrapper'>
           <div
            className='left-side-image'
            style={{
              background: 'url('+ aboutImage + ') no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
           >
            </div>

            <div className='right-side-content'>
              <h1>About Me</h1>
              <p>I am a student at Bottega University in the Full Stack Developer Course</p>
              <p>I am scheduled to finish the program in January of 2021, and am looking to become a junior developer once I am finished</p>
            </div>
         </div>
       );
}