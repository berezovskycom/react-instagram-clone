import React, { Component } from 'react';
import styles from '../styles/Header.scss';

class Header extends Component {
	render() {
		return (
			<header className="header">			
				<nav className="header__nav">
					<div className="header__logo">
						<a href="/" className="header__logo-pic--wrapper">
						<span className="sprites header__logo-pic">Instagram</span>
						</a>
					</div>
					<form className="header__form">
						<input type="text" className="header__input" placeholder="Search"/>
						<span className="sprites sprites__search"></span>
					</form>
					<ul className="header__list">
						<li className="header__list-item">
							<a href="/explore" className="sprites sprites__find-ppl header__link">Find People</a>
						</li>
						<li className="header__list-item">
							<a href="/activity" className="sprites sprites__activity header__link">Activity feed</a>
						</li>
						<li className="header__list-item">
							<a href="/profile" className="sprites sprites__profile header__link">Profile</a>
						</li>
					</ul>
				</nav>
			</header>				
		)
	}
};

export default Header;