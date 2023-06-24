import React from 'react'
import './Hero_cta.scss';
import Button from '../../atoms/button/Button';
const Hero_cta = () => {
  return (
		<div className='hero_cta'>
			<h1>Take The World’s</h1>
			<h2>Best Yogurt</h2>
			<p>
				Greek Yougurt is a unique traditional product which contains no
				additives and preservatives. It is a healthy aperitif, source of energy
				and the best way to start the day.
			</p>
			<Button text='Buy now'/>
			{/* <div className="social-icons">
				<span>insta</span>
				<span>insta</span>
				<span>insta</span>
			</div> */}
		</div>
	);
}

export default Hero_cta