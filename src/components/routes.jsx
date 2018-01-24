import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App.jsx';
import Explore from './Explore.jsx';
import Activity from './Activity.jsx';
import Profile from './Profile.jsx';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={App}/>
		<Route path="/explore" component={Explore}/>
		<Route path="/activity" component={Activity}/>
		<Route path="/profile" component={Profile}/>
	</Switch>
)

export default Routes;