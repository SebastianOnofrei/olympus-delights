import React from 'react'
import './Footer.scss';
const Footer = () => {

let productLinks = ['Overview','Pricing','Customer stories'];
let resourcesLinks = ['Blog','Guides & tutorials','Help center'];
let companyLinks = ['About us','Careers','Media kit'];

  return (
		<footer>
			<div className="product-links">
				<h5>Product</h5>
				<ul>
					{productLinks.map((link, index) => {
						return <li>{link}</li>;
					})}
				</ul>
			</div>
			<div className="resources">
				<h5>Resources</h5>
				<ul>
					{resourcesLinks.map((link, index) => {
						return <li>{link}</li>;
					})}
				</ul>
			</div>
			<div className="company">
				<h5>Company</h5>
				<ul>
					{companyLinks.map((link, index) => {
						return <li>{link}</li>;
					})}
				</ul>
			</div>
		</footer>
	);
}

export default Footer