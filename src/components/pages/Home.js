import React from 'react';

const Home = () => {
	return (
		<div className="jumbotron text-center">
			<h1 className="display-4">Contact Manager App</h1>
			<p className="lead">This is a simple app to manage contacts</p>
			<hr className="my-4" />
			<p>If you want to see contacts click to the bottom billow</p>
			<a className="btn btn-primary btn-lg" href="/contacts" role="button">
				Contacts
			</a>
		</div>
	);
};

export default Home;
