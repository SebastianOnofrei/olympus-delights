import React from 'react'
import './Hero_cta.scss';
import Button from '../../atoms/button/Button';
import instagram from '../../../assets/_Instagram.svg'
import facebook from "../../../assets/_Facebook.svg";
import google from "../../../assets/_Google.svg";


const Hero_cta = () => {
  return (
		<div className="hero_cta">
			<h1>Take The World’s</h1>
			<h2>Best Yogurt</h2>
			<p>
				Greek Yougurt is a unique traditional product which contains no
				additives and preservatives. It is a healthy aperitif, source of energy
				and the best way to start the day.
			</p>
			<Button text="Buy now" />
			<div className="social-icons">
				<img src={instagram} alt="instagram" className="socialIcon" />
				<img src={facebook} alt="facebook" className="socialIcon" />
				<img src={google} alt="google" className="socialIcon" />
			</div>
		</div>
	);
}

export default Hero_cta