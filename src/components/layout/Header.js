import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => {
	const { branding } = props;

	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark mb-3 py-2"
			style={navStyle}
		>
			<div className="container">
				<NavLink exact to="/" className="navbar-brand">
					{branding}
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#nav1"
					aria-controls="nav1"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="nav1">
					<div className="navbar-nav mr-auto">
						<NavLink exact to="/" className="nav-item nav-link">
							<i className="fas fa-home" /> Home
						</NavLink>
						<NavLink exact to="/about" className="nav-item nav-link">
							<i className="fas fa-info-circle" /> About
						</NavLink>
						<NavLink exact to="/contacts" className="nav-item nav-link">
							<i className="fas fa-users" /> Contacts
						</NavLink>
						<NavLink exact to="/contacts/add" className="nav-item nav-link">
							<i className="fas fa-address-card" /> Add Contact
						</NavLink>
						<NavLink exact to="/test" className="nav-item nav-link">
							<i className="fas fa-vial" /> Test
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

Header.defaultProps = {
	branding: 'My App'
};

Header.propTypes = {
	branding: PropTypes.string.isRequired
};

const navStyle = {
	backgroundColor: '#660066'
};

export default Header;
