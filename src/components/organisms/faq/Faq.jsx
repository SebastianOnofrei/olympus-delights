import React from 'react'
import Accordion from '../../molecules/accordion/Accordion'
import './Faq.scss';

const Faq = () => {
  return (
		<>
			<h3>FAQ</h3>
			<section className="faq_section">
				<Accordion />
				<div className="img-container faq_img">
				</div>
			</section>
		</>
	);
}

export default Faq