import React, { Component } from 'react';
import styles from '../styles/Suggested.scss';
import SuggestedItem from './SuggestedItem.jsx';
import SuggestedItemFb from './SuggestedItemFb.jsx';
import { UsersAPI } from '../api/api.jsx';

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
						{
							UsersAPI.all().map( u => (
								<SuggestedItem 
									key={u.id}
									nickname={u.nickname}
									desc={u.title}
									img={u.img}
									link={u.link}
								/>
							))
						}
						</div>
					</ul>
				</section>
			</main>
		)
	}
}

export default Main;