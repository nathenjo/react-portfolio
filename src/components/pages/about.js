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
              <h1>Here is about me</h1>
              <p>Some random facts</p>
            </div>
         </div>
       );
}