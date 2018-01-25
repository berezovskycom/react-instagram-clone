import React, { Component } from 'react';
import styles from '../styles/DiscoverBlock.scss';
import btnStyles from '../styles/Suggested.scss';

class DiscoverBlock extends Component {

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
			<div className="discover__item feed__pic-wrapper">
				<div className="discover__img-wrapper">
					<a href="/" className="discover__link">
						<img src={this.props.img} alt={this.props.nickname} className="discover__img"/>
					</a>
				</div>
				<a className="discover__nickname">{this.props.nickname}</a>					
				<div className="discover__desc">{this.props.desc}</div>
				<button className={this.state.follow ? "discover__btn item__button" : "item__button--following"} onClick={this.follow}>{this.state.follow ? 'Follow' : 'Following'}</button>
			</div>
		)
	}
}

export default DiscoverBlock;	