import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/style.scss';
import stylesProfile from '../styles/Profile.scss';

import Header from './Header.jsx';
import ProfileHeader from './ProfileHeader.jsx';
import Feed from './Feed.jsx';
import Footer from './Footer.jsx';

class Profile extends Component {
	render() {
		return (
			<div>
				<Header/>
					<div>
						<main className="main">
							<section className="section">
								<ProfileHeader/>
								<Feed/>
							</section>
						</main>
					</div>
				<Footer/>
			</div>			
		)
	}
};

export default Profile;