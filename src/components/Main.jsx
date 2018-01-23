import React, { Component } from 'react';
import styles from '../styles/Main.scss';
import FeedItem from './FeedItem.jsx';
import FeedItemFb from './FeedItemFb.jsx';

class Main extends Component {
	render() {
		return (
			<main className="main">
				<section className="feed">
					<ul className="feed__list">
						<FeedItemFb/>						
						<li className="feed__list-title">
							<h2>Suggested for you</h2>
						</li>
						<div className="feed__border--wrapper">
						<FeedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<FeedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<FeedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<FeedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<FeedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<FeedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<FeedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<FeedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<FeedItem 
						nickname="kevin" 
						desc="Kevin Systrom" 
						img="https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg"
						link="https://www.instagram.com/kevin/"
						/>
						<FeedItem 
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