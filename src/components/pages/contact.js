import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import loginImg from '../../../static/assets/images/auth/login.jpg';

export default function(props){
       return(
         <div className='contact-page-wrapper'>
           <div
            className='left-side'
            style={{
              background: 'url('+ loginImg + ') no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            >
           </div>

           <div className='right-side'>
             <h1>Nathen Johnson</h1>
             <div className='right-side-content'>
                <FontAwesomeIcon icon='mobile-alt' />
                <h3>(843) 861-8002</h3>
              </div>
              <div className='right-side-content'>
                <FontAwesomeIcon icon='envelope-open-text' />
                <h3>nateselectronicrepair@gmail.com</h3>
              </div>
              <div className='right-side-content'>
                <FontAwesomeIcon icon='map-pin' />
                <h3>Florence, SC</h3>
              </div>
           </div>
             
         </div>
       );
}