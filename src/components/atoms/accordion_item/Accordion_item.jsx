import React from 'react'
import './Accordion_item.scss';
const Accordion_item = (props) => {
  return (
		<div className="accordion_item">
			<div className="accordion_item--title">
				<p>{props.data.question}</p>
			</div>
			<div className="accordion_item--content">
				<p>{props.data.answer}</p>
			</div>
		</div>
	);
}

export default Accordion_item