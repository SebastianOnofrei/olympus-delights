import React, { useState } from 'react'
import './Accordion_item.scss';
const Accordion_item = (props) => {

const [showMore, setShowMore] = useState(false);
const clickHandler = () =>{
	setShowMore(!showMore);
}
return (
	<div className="accordion_item" onClick={clickHandler}>
		<div className="accordion_item_title-container">
			<h5 className="accordion_item--title">{props.data.question}</h5>
			<div className={showMore ? "arrow arrow-up" : "arrow"}></div>
		</div>
		{showMore ? (
			<div>
				<p className="accordion_item--content show">{props.data.answer}</p>
			</div>
		) : (
			""
		)}
	</div>
);
}

export default Accordion_item