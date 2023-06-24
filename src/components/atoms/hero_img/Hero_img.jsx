import React from 'react'; 
import './Hero_img.scss';

const Hero_img = (props) => {
  return (
    <img src={props.source} alt={props.source} />
  )
}

export default Hero_img