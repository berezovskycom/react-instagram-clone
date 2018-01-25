import React, { Component } from 'react';
import styles from '../styles/Feed.scss';
import FeedPic from './FeedPic.jsx';
import { ProfileAPI } from '../api/api.jsx';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pic: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/f02738766bb3e6be51f743dd4a81078c/5AF527AB/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/26065793_164732244141894_5110852696731025408_n.jpg',
			desc: 'New York City'
		}
	}

	render() {
		return (
			<div className="feed__section">
				<div className="feed__feed">
					<div className="feed__feed-child">
					{
						ProfileAPI.all().map( i => (
							<FeedPic 
								id={i.id}
								pic={i.src}
								desc={i.desc}
								likesNum={i.likes}
								commNum={i.comments}
							/>
						))
					}
					</div>
				</div>
			</div>
		)
	}
}

export default Feed;