import React from 'react' 
import './Nav_item.scss';
const Nav_item = (props) => {
  return (
		<li>
			<a href="">{props.link}</a>
		</li>
	);
}

export default Nav_item