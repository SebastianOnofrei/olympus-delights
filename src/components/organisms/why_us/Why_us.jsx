import React from 'react'
import Why_us_cta from '../../molecules/why_us_cta/Why_us_cta';
import './Why_us.scss';
import image from '../../../assets/strawberryYogurt.png'

const Why_us = () => {
  return (
		<>
			<h3>Why us?</h3>
			<section className="why_us_section">
				<div className='img-container'>
				</div>
				<Why_us_cta />
			</section>
		</>
	);
}

export default Why_us