import React, { Component } from 'react';
import styles from '../styles/Suggested.scss';
import SuggestedItem from './SuggestedItem.jsx';
import SuggestedItemFb from './SuggestedItemFb.jsx';

class Main extends Component {
	render() {
		return (
			<main className="main">
				<section className="suggested">
					<ul className="suggested__list">
						<SuggestedItemFb/>						
						<li className="suggested__list-title">
							<h2>Suggested for you</h2>
						</li>
						<div className="suggested__border--wrapper">
						<SuggestedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<SuggestedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<SuggestedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<SuggestedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<SuggestedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<SuggestedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<SuggestedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<SuggestedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<SuggestedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<SuggestedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						</div>
					</ul>
				</section>
			</main>
		)
	}
}

export default Main;