import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import styles from '../styles/Activity.scss';

class Activity extends Component {
	render() {
		return (
			<div>
				<Header/>
					<main className="main">
						<section className="activity">
							<div className="feed">
								<h2 className="activity__title">No recent Activity</h2>
							</div>
						</section>	
					</main>
				<Footer/>
			</div>			
		)
	}
};

export default Activity;