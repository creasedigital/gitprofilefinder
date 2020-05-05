import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

const AlertComp = ({ alert }) => {
	return (
		alert !== null && (
			<Fragment>
				<Container className='text-danger mb-3'>
					<i className='fas fa-times'></i> {alert.msg}
				</Container>
			</Fragment>
		)
	);
};

export default AlertComp;
