import React, { Component, Fragment } from 'react';
import { Navbar, Container } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
			<Fragment>
				<Navbar
					bg='dark'
					variant='dark'
					fixed='bottom'
					className='py-4'
					id='footer'
				>
					<Container className='d-flex justify-content-center text-light'>
						<h4>
							<small>Crease Digital &copy; 2020</small>
						</h4>
					</Container>
				</Navbar>
			</Fragment>
		);
	}
}

export default Footer;
