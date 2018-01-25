import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/FeedPic.scss';

class FeedPic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: true
		}
		this.hover = this.hover.bind(this);
	}

	hover() {
		this.setState({
			hover: !this.state.hover
		});
	}

	render() {
		return (
			<div className="feed__pic-wrapper">
				<Link to="/" className={this.state.hover ? "feed__link" : "feed__link--hover"} onMouseOver={this.hover} onMouseOut={this.hover}>
					<div className="feed__hover">
						<span className="feed__hover-heart sprites"></span>
						<span className="feed__hover-heart--num">{this.props.likesNum}</span>
						<span className="feed__hover-comments sprites"></span>
						<span className="feed__hover-comments--num">{this.props.commNum}</span>
					</div>
				</Link>
				<img src={this.props.pic} className="feed__pic" alt={this.props.desc}/>
			</div>
		)
	}
} 

export default FeedPic;