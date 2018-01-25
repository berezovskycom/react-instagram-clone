import React, { Component } from 'react';
import styles from '../styles/ProfileHeader.scss';

class ProfileHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nickname: 'kevin',
			desc: 'Kevin Systrom',
			img: 'https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-19/s150x150/13732144_1764457777134045_549538515_a.jpg',
			link: 'https://www.instagram.com/kevin/'

		}
	}

	render() {
		return (
				<header className="profile__header">
					<div className="profile__avatar-container">
						<div className="profile__avatar-wrapper">
							<img src={this.state.img} alt={this.state.nickname} className="profile__avatar"/>
						</div>
					</div>

					<article className="profile__info">
						<div className="profile__info-header">
							<h1 className="profile__nickname">{this.state.nickname}</h1>
								<a href="/" className="profile__edit-btn">Edit Profile</a>
								<a href="/" className="profile__settings-btn sprites">Settings</a>
						</div>
							<div className="profile__info-stats">
								<ul className="profile__list">
									<li>
										<a href="/" className="profile__list-item">
											<span className="profile__list-count">0</span> posts
										</a>
									</li>
									<li>	
										<a href="/" className="profile__list-item">
											<span className="profile__list-count">0</span> followers
										</a>
									</li>
									<li>	
										<a href="/" className="profile__list-item">
											<span className="profile__list-count">0</span> following
										</a>													
									</li>
								</ul>
							</div>
							<div className="profile__info-desc">
								<span className="profile__info-name">{this.state.desc}</span>
							</div>	
					</article>
				</header>
		)
	}
}								

export default ProfileHeader;