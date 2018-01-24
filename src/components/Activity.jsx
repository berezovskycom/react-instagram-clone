import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Activity extends Component {
	render() {
		return (
			<div>
				<Header/>
					<div className="explore">
						Hello peeps! Let's view my activity
					</div>
				<Footer/>
			</div>			
		)
	}
};

export default Activity;