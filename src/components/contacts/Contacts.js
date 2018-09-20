import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
	// deleteContact = id => {
	// 	const { contacts } = this.state;

	// 	const newContacts = contacts.filter(contact => contact.id !== id);

	// 	this.setState({ contacts: newContacts });
	// };

	render() {
		return (
			<Consumer>
				{value => {
					const { contacts } = value;
					return (
						<Fragment>
							<h1 className="display-4 mb-2">
								<span style={spanContactStyle}>Contact</span> List
							</h1>
							{contacts.map(contact => (
								<Contact key={contact.id} contact={contact} />
							))}
						</Fragment>
					);
				}}
			</Consumer>
		);
	}
}

const spanContactStyle = {
	color: '#660066'
};

export default Contacts;
