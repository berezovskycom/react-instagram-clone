import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Profile extends Component {
	render() {
		return (
			<div>
				<Header/>
					<div className="explore">
						Hello peeps! Profile
					</div>
				<Footer/>
			</div>			
		)
	}
};

export default Profile;