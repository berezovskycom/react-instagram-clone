import React, { Component } from 'react';
import Header from './Header.jsx';
import DiscoverBlock from './DiscoverBlock.jsx';
import FeedPic from './FeedPic.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/Explore.scss';

class Explore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pic: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/f02738766bb3e6be51f743dd4a81078c/5AF527AB/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/26065793_164732244141894_5110852696731025408_n.jpg',
			nickname: 'New York City',
			desc: 'the best city in the world',
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
										<DiscoverBlock
											img={this.state.pic}
											desc={this.state.desc}
											nickname={this.state.nickname}
										/>
										<DiscoverBlock
											img={this.state.pic}
											desc={this.state.desc}
											nickname={this.state.nickname}
										/>
										<DiscoverBlock
											img={this.state.pic}
											desc={this.state.desc}
											nickname={this.state.nickname}
										/>
									</div>
								</div>
							</div>
							
							<h2 className="section__title">Explore</h2>
							<section className="feed feed__section">
								<div className="feed__feed">
									<div className="feed__feed-child">
										<FeedPic 
											pic={this.state.pic} 
											desc={this.state.desc}
											likesNum="10"
											commNum="0"
										/>
										<FeedPic 
											pic={this.state.pic} 
											desc={this.state.desc}
											likesNum="16"
											commNum="1"
										/>
										<FeedPic 
											pic={this.state.pic} 
											desc={this.state.desc}
											likesNum="21"
											commNum="0"
										/>
									</div>

									<div className="feed__feed-child">
										<FeedPic
											pic={this.state.pic} 
											desc={this.state.desc}
											likesNum="10"
											commNum="0"
										/>
										<FeedPic 
											pic={this.state.pic} 
											desc={this.state.desc}
											likesNum="16"
											commNum="1"
										/>
										<FeedPic 
											pic={this.state.pic} 
											desc={this.state.desc}
											likesNum="21"
											commNum="0"
										/>
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