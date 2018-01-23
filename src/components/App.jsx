import React, { Component } from 'react';
import styles from '../styles/App.scss';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Main/>	
				<Footer/>
			</div>
		)
	}
};

export default App;