import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Explore extends Component {
	render() {
		return (
			<div>
				<Header/>
					<div className="explore">
						Hello peeps! Let's explore
					</div>
				<Footer/>
			</div>			
		)
	}
};

export default Explore;