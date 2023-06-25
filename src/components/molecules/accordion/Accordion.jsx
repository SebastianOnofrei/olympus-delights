import React from 'react'
import Accordion_item from '../../atoms/accordion_item/Accordion_item';

const Accordion = () => {
  return (
    <div className='accordion'>
        {data.map((itemInfo,index) =>{
            return(
                <Accordion_item key={index} data={itemInfo}/>
            )
        })}
    </div>
  )
}

const data = [
	{
		question: "Greek yogurt is healthy?",
		answer:
			"Yes, Greek yogurt is generally considered a healthy food option. It offers several nutritional benefits and is a popular choice among health-conscious individuals. ",
	},
	{
		question: "Why Greek yogurt is natural?",
		answer:
			"Greek yogurt is often considered natural because it undergoes a minimal processing method that preserves many of its natural characteristics.",
	},
	{
		question: "Why our product is the best choice for you? ",
		answer:
			"Our Greek yogurt stands out as the best choice for you due to its authentic taste, creamy texture, high protein content, nutritional value, gut-friendly probiotics, and versatility. It's a delicious and nutritious option that can enhance your well-being and cater to your unique dietary needs and preferences.",
	},
	{
		question: "How yogurt affects health?",
		answer:
			"Yogurt can have several positive effects on health due to its nutritional composition and the presence of live bacterial cultures (probiotics)",
	},
];
export default Accordion