import React from "react";
import "./keyPad.css";

import Button from "../Button/button";

const keyPad = (props) => {
   return (
      <div className='keypad'>
         <Button clickHandler = {e => props.clickHandler(e)} variant='light-grey' value="7"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='light-grey' value="8"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='light-grey' value="9"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='dark-grey' value="÷"></Button>
         
         <Button clickHandler = {e => props.clickHandler(e)} variant='light-grey' value="4"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='light-grey' value="5"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='light-grey' value="6"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='dark-grey' value="X"></Button>

         <Button clickHandler = {e => props.clickHandler(e)} variant='light-grey' value="1"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='light-grey' value="2"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='light-grey' value="3"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='dark-grey' value="-"></Button>

         <Button clickHandler = {e => props.clickHandler(e)} variant='red' value="C"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='light-grey' value="0"></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='lightgreen' value="="></Button>
         <Button clickHandler = {e => props.clickHandler(e)} variant='dark-grey' value="+"></Button>
      </div>
   );
};

export default keyPad;
