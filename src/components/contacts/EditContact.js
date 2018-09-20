import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
import TextInportGroup from '../layout/TextInputGroup';
// import uuid from 'uuid';

class EditContact extends Component {
	state = {
		name: '',
		username: '',
		email: '',
		phone: '',
		errors: {}
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	async componentDidMount() {
		const { id } = this.props.match.params;
		const res = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);

		const contact = res.data;

		this.setState({
			name: contact.name,
			username: contact.username,
			email: contact.email,
			phone: contact.phone
		});
	}

	onSubmit = async (dispatch, e) => {
		e.preventDefault();

		const { name, username, email, phone } = this.state;

		// Check for errors
		//  - Name
		if (name === '') {
			this.setState({ errors: { name: 'Name is required' } });
			return;
		}
		//  - Usernane
		if (username === '') {
			this.setState({ errors: { username: 'Username is required' } });
			return;
		}
		//  - Email
		if (email === '') {
			this.setState({ errors: { email: 'Email is required' } });
			return;
		}
		//  - Phone
		if (phone === '') {
			this.setState({ errors: { phone: 'Phone is required' } });
			return;
		}

		const updContact = {
			name,
			username,
			email,
			phone
		};

		const { id } = this.props.match.params;

		const res = await axios.put(
			`https://jsonplaceholder.typicode.com/users/${id}`,
			updContact
		);

		dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

		// Clear inputs
		this.setState({
			name: '',
			username: '',
			email: '',
			phone: '',
			errors: {}
		});

		// Redirect
		this.props.history.push('/contacts');
	};

	render() {
		const { name, username, email, phone, errors } = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;

					return (
						<div className="card mb-3" style={cardStyle}>
							<div className="card-header">Edit Contact</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<TextInportGroup
										label="Name"
										id="name"
										placeholder="Enter Name..."
										name="name"
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<TextInportGroup
										label="Username"
										id="username"
										placeholder="Enter Username..."
										name="username"
										value={username}
										onChange={this.onChange}
										error={errors.username}
									/>
									<TextInportGroup
										label="Email"
										type="email"
										id="email"
										placeholder="Enter Email..."
										name="email"
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<TextInportGroup
										label="Phone"
										id="phone"
										placeholder="Enter Phone Number..."
										name="phone"
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									<input
										type="submit"
										value="Update Contact"
										className="btn btn-outline-dark btn-lg btn-block"
									/>
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

const cardStyle = {
	border: '1px solid #660066'
};

export default EditContact;
