import React from 'react';
import { Link } from 'react-router-dom';

export default function(props){
       return(
         <div>
             <h2>Couldn't find this page</h2>
             <Link to="/">Back to Homepage</Link>
         </div>
       );
}