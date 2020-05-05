import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
	return (
		<Fragment>
			<Container>
				<h1 className='mb-2'>About this app</h1>
				<p>
					This app was created to search user profile on github. It displays the
					user's image, login and few features and details
				</p>
				<p>
					<small>
						<strong>V 1. 0. 0 :</strong> created by Ojore A. Chris and styled
						using react-bootstrap
					</small>
				</p>
			</Container>
		</Fragment>
	);
};

export default About;
