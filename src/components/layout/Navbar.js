import React, { Component, Fragment } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<Fragment>
				<Navbar bg='dark' variant='dark' sticky='top' className='mb-2 '>
					<Container className='d-flex justify-content-between'>
						<Navbar.Brand className='p-2'>
							<Link to='/' className='text-light text-decoration-none'>
								<i className='fab fa-github-square align-middle fa-2x'></i>{' '}
								GitHub Profile Finder
							</Link>
						</Navbar.Brand>
						<Nav>
							<Link
								to='/about'
								role='button'
								className='text-light text-decoration-none'
							>
								About
							</Link>
						</Nav>
					</Container>
				</Navbar>
			</Fragment>
		);
	}
}

export default Navigation;
