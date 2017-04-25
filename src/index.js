import React from 'react';
import ReactDOM from 'react-dom';
// import {HashRouter as Router, Route } from 'react-router';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Audio from './components/Audio';
import Visual from './components/Visual';
import Contact from './components/Contact';

import NotFound from './components/NotFound';

import './styles/css/styles.css';

ReactDOM.render(
	<BrowserRouter>
		<App>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/about" component={About} />
				<Route path="/audio" component={Audio} />
				<Route path="/visual" component={Visual} />		
				<Route path="/contact" component={Contact} />
				<Route component={NotFound}/>
			</Switch>				
		</App>
	</BrowserRouter>
 ,
  document.getElementById('root')
);
