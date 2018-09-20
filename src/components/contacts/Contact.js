import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Consumer } from '../../context';

class Contact extends Component {
	state = {
		showContactInfo: false
	};

	onShowClick = e => {
		// Get the target
		const element = e.target;

		// Change showContactInfo status
		this.setState({ showContactInfo: !this.state.showContactInfo });

		// Change a fontawesome icon
		element.classList.toggle('fa-sort-up');
	};

	onDeleteClick = async (id, dispatch) => {
		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
			dispatch({ type: 'DELETE_CONTACT', payload: id });
		} catch (error) {
			dispatch({ type: 'DELETE_CONTACT', payload: id });
		}
	};

	render() {
		const { id, name, email, phone, username } = this.props.contact;
		const { showContactInfo } = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="card mb-3">
							<div className="card-header" style={headerCardStyle}>
								{name}{' '}
								<i
									className="fas fa-sort-down"
									onClick={this.onShowClick}
									style={sortIconStyle}
									title={this.state.showContactInfo ? 'Up' : 'Down'}
								/>
								<i
									className="fas fa-times"
									onClick={this.onDeleteClick.bind(this, id, dispatch)}
									style={timesIconStyle}
									title="Remove"
								/>
								<Link to={`/contacts/edit/${id}`}>
									<i
										className="fas fa-pencil-alt"
										style={{
											cursor: 'pointer',
											float: 'right',
											color: 'black',
											marginRight: '1rem'
										}}
										title="Edit"
									/>
								</Link>
							</div>
							{showContactInfo ? (
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="font-weight-bold">Username:</span>{' '}
										{username}
									</li>
									<li className="list-group-item">
										<span className="font-weight-bold">Email:</span> {email}
									</li>
									<li className="list-group-item">
										<span className="font-weight-bold">Phone:</span> {phone}
									</li>
								</ul>
							) : null}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

const headerCardStyle = {
	fontSize: '1.3rem',
	fontWeight: 'bold'
};

const sortIconStyle = {
	cursor: 'pointer'
};

const timesIconStyle = {
	cursor: 'pointer',
	color: '#a00103',
	float: 'right'
};

Contact.propTypes = {
	contact: PropTypes.object.isRequired
};

export default Contact;
