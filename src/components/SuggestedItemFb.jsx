import React, { Component } from 'react';
import SuggestedItem, { follow } from './SuggestedItem.jsx';

class SuggestedItemFb extends Component {
	render() {
		return (
			<li className="suggested__list-item">
				<div className="item__avatar--wrapper item__avatar--wrapper--border">
						<span className="sprites item__avatar--sprites"/>
				</div>
				<div className="item__main">
					<div className="item__nickname">Connect to Facebook</div>
					<div className="item__desc">Follow your friends</div>
				</div>
				<div className="item__button--wrapper">
					<button className="item__button" href="/">Connect</button>
				</div>	
			</li>
		)
	}
}

export default SuggestedItemFb;