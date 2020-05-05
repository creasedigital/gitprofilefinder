import React, { Fragment } from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
	return (
		<Fragment>
			<Spinner animation='grow' role='status' variant='info' />
			<Spinner animation='grow' role='status' variant='info' />
			<Spinner animation='grow' role='status' variant='info' />
		</Fragment>
	);
};

export default Loader;
