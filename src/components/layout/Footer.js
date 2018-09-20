import React from 'react';

const Footer = () => {
	return <div style={footerStyle}>Adel Tahenti &copy; 2018</div>;
};

const footerStyle = {
	position: 'fixed',
	left: '0',
	bottom: '0',
	width: '100%',
	padding: '15px 0',
	backgroundColor: '#660066',
	color: 'white',
	textAlign: 'center',
	fontSize: '1.2rem'
};

export default Footer;
