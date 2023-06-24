import React from 'react'
import Nav_item from '../../atoms/navigation_item/Nav_item';
import './Navigation.scss';

const Navigation = () => {

  return (
		<nav>
			<ul>
				<Nav_item link="Shop" />
				<Nav_item link="About" />
				<Nav_item link="Blog" />
				<Nav_item link="FAQ" />
			</ul>
		</nav>
	);
}

export default Navigation