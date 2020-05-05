import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserItem = ({ type, login, avatar, getUserprofile }) => {
	return (
		<Fragment>
			<Card style={{ width: '18rem', textAlign: 'center', display: 'grid' }}>
				<Card.Img variant='top' src={avatar} />
				<Card.Body>
					<Card.Title>{login}</Card.Title>
					<Button variant='info' onClick={getUserprofile}>
						<Link
							to={`/user/${login}`}
							className='text-decoration-none text-light'
						>
							View Profile
						</Link>
					</Button>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default UserItem;
