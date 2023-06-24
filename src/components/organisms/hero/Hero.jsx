import React from 'react'
import './Hero.scss';
import Hero_cta from '../../molecules/hero_cta/Hero_cta';
import Hero_img from '../../atoms/hero_img/Hero_img';
import image from '../../../assets/yogurtHead.png'
const Hero = () => {
  return (
    <section>
        <Hero_cta/>
        <Hero_img source={image} />
    </section>
  )
}

export default Hero