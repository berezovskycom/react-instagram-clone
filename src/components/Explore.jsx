import React, { Component } from 'react';
import Header from './Header.jsx';
import DiscoverBlock from './DiscoverBlock.jsx';
import FeedPic from './FeedPic.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/Explore.scss';

class Explore extends Component {

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