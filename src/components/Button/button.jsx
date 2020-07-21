import React from 'react';

import './button.css';


const button = (props) => {
   return (
      <div onClick={e => props.clickHandler(e)} className={`button ${props.variant}`}>
         {props.value}
      </div>
   )
}

export default button;