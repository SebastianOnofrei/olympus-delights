import React from 'react'
import Why_us_cta from '../../molecules/why_us_cta/Why_us_cta';
import './Why_us.scss';
import Hero_img from '../../atoms/hero_img/Hero_img';
import image from '../../../assets/cherryYogurt.png';

const Why_us = () => {
  return (
		<>
			<section>
				<Hero_img source={image} />
				<Why_us_cta />
			</section>
		</>
	);
}

export default Why_us