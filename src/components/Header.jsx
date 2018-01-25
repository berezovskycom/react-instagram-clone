import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.scss';

class Header extends Component {
	render() {
		return (
			<header className="header">			
				<nav className="header__nav">
					<div className="header__logo">
						<Link to="/" className="header__logo-pic--wrapper">
						<span className="sprites header__logo-pic">Instagram</span>
						</Link>
					</div>
					<form className="header__form">
						<input type="text" className="header__input" placeholder="Search"/>
						<span className="sprites sprites__search"></span>
					</form>
					<ul className="header__list">
						<li className="header__list-item">
							<Link to="/explore" className="sprites sprites__find-ppl header__link">Find People</Link>
						</li>
						<li className="header__list-item">
							<Link to="/activity" className="sprites sprites__activity header__link">Activity feed</Link>
						</li>
						<li className="header__list-item">
							<Link to="/profile" className="sprites sprites__profile header__link">Profile</Link>
						</li>
					</ul>
				</nav>
			</header>				
		)
	}
};

export default Header;