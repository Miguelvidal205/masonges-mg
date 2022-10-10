import React from 'react';
import logo from '../media/gifs/masonsmgfast.gif'
import './LoaderGif.css'
export default function LoaderGif() {

  return (
      <img src={logo} alt="loading..." className='loader'/>
  );
}