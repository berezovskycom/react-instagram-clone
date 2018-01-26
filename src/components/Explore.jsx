import React, { Component } from 'react';
import Header from './Header.jsx';
import DiscoverBlock from './DiscoverBlock.jsx';
import FeedPic from './FeedPic.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/Explore.scss';

import { ExploreAPI } from '../api/api.jsx';

class Explore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pic: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/a40cf4501b8c34955f5d340683975356/5B06CCBE/t51.2885-19/s150x150/17662225_236384403500667_2148968091776712704_a.jpg',
			desc: 'img',
			nickname: 'hellodorothy'
		}
	}

	render() {
		return (
			<div>
				<Header/>
					<main className="main">
						<section className="section">
							<h2 className="section__title">
								Discover People
								<a href="/" className="section__title-link">See All</a>
							</h2>
							<div className="discover__feed feed__section">
								<div className="discover__feed-child feed__feed">
									<div className="discover__pic-wrapper feed__feed-child">
										{
											ExploreAPI.allDiscover().map( i => (
												<DiscoverBlock
													key={i.id}
													img={i.img}
													desc=""
													nickname={i.nickname}
												/>	
											))										
										}
									</div>
								</div>
							</div>
							
							<h2 className="section__title">Explore</h2>
							<section className="feed feed__section">
								<div className="feed__feed">
									<div className="feed__feed-child">
										{
											ExploreAPI.allOne().map( i => (
												<FeedPic 
													key={i.id}
													pic={i.src} 
													desc={this.state.desc}
													likesNum={i.likes}
													commNum={i.comments}
												/>												
											))
										}
									</div>

									<div className="feed__feed-child">
										{
											ExploreAPI.allTwo().map( i => (
												<FeedPic 
													key={i.id}
													pic={i.src} 
													desc={this.state.desc}
													likesNum={i.likes}
													commNum={i.comments}
												/>												
											))
										}	
									</div>

									<div className="feed__feed-child">
										{
											ExploreAPI.allThree().map( i => (
												<FeedPic 
													key={i.id}
													pic={i.src} 
													desc={this.state.desc}
													likesNum={i.likes}
													commNum={i.comments}
												/>												
											))
										}	
									</div>									
								</div>	
							</section>	 
						</section>
					</main>
				<Footer/>
			</div>			
		)
	}
};

export default Explore;