import React from 'react';
import './screen.css';

const screen = (props) => {
   return (
      <div className='screen'>
         {props.value}
      </div>
   )
}

export default screen;