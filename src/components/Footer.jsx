import React, { Component } from 'react';
import styles from '../styles/Footer.scss';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer__wrapper">
				<nav className="footer__nav">
					<ul className="footer__list">
						<li className="footer__list-item">
							<a href="/about-us" className="footer__link">About us</a>
						</li>
						<li className="footer__list-item">
							<a href="/support" className="footer__link">Support</a>
						</li>
						<li className="footer__list-item">
							<a href="/blog" className="footer__link">Blog</a>
						</li>
						<li className="footer__list-item">
							<a href="/press" className="footer__link">Press</a>
						</li>
						<li className="footer__list-item">
							<a href="/api" className="footer__link">API</a>
						</li>
						<li className="footer__list-item">
							<a href="/jobs" className="footer__link">Jobs</a>
						</li>
						<li className="footer__list-item">
							<a href="/privacy" className="footer__link">Privacy</a>
						</li>
						<li className="footer__list-item">
							<a href="/terms" className="footer__link">Terms</a>
						</li>
						<li className="footer__list-item">
							<a href="/directory" className="footer__link">Directory</a>
						</li>
						<li className="footer__list-item">
							<a href="/lang" className="footer__link">Language</a>
						</li>								
					</ul>
				</nav>	
				<span className="footer__copyright">&copy; 2018 Instagram</span>
				</div>
			</footer>
		)
	}
}

export default Footer;