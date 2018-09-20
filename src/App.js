import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import Test from './components/test/Test';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router basename={process.env.PUBLIC_URL}>
					<div className="App" style={bodyStyle}>
						<Header branding="Contact Manager" />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/contacts" component={Contacts} />
								<Route exact path="/contacts/add" component={AddContact} />
								<Route
									exact
									path="/contacts/edit/:id"
									component={EditContact}
								/>
								<Route exact path="/test" component={Test} />
								<Route component={NotFound} />
							</Switch>
						</div>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

const bodyStyle = {
	fontFamily: "'Montserrat', sans-serif"
};

export default App;

// JSX is Javascript Extension => Using html inside javascript
// To access parameters => path="/about/:id" - in about file
// to get id => {props.match.params.id}
