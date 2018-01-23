import React, { Component } from 'react';

class FeedItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			follow: true
		};
		this.follow = this.follow.bind(this);
	}

	follow() {
		this.setState({
			follow: !this.state.follow
		});
	}

	render() {
		return (
			<li className="feed__list-item">
				<div className="item__avatar--wrapper">
					<a href={this.props.link} className="item__avatar--link">
						<img src={this.props.img} alt={this.props.nickname} className="item__avatar"/>
					</a>	
				</div>
				<div className="item__main">
					<div className="item__nickname">{this.props.nickname}</div>
					<div className="item__desc">{this.props.desc}</div>
				</div>
				<div className="item__button--wrapper">
					<button className={this.state.follow ? "item__button" : "item__button--following"} onClick={this.follow}>{this.state.follow ? 'Follow' : 'Following'}</button>
				</div>	
			</li>
		)
	}
}

export default FeedItem;