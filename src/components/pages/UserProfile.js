import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const UserProfile = ({
	userProfile: {
		login,
		id,
		avatar_url,
		html_url,
		followers,
		following,
		repos_url,
		name,
		blog,
		location,
		bio,
		public_repos,
		email,
		hireable,
		updated_at,
	},
}) => {
	return (
		<div>
			<Container className='mb-3'>
				<Row>
					<Col lg='4' className='p-2'>
						<Card
							border='info'
							className='d-flex align-items-center justify-content-center'
						>
							<img
								variant='top'
								src={avatar_url}
								alt='user'
								className='rounded-circle p-2'
								style={{ width: '18rem' }}
							/>
						</Card>
					</Col>
					<Col lg='8' className='p-2'>
						<Card border='info'>
							<Card.Header as='h3'>
								<i className='fab fa-github-square align-middle fa-2x'></i>{' '}
								GitHub Profile
							</Card.Header>
							<Card.Body>
								{name ? (
									<Card.Text
										style={{ fontSize: '2rem' }}
										className='text-lg mt-2 font-weight-bold'
									>
										Name: {name}
									</Card.Text>
								) : (
									false
								)}
								{email ? (
									<Card.Text className='text-lg mt-2 font-weight-bold'>
										Email: {email}
									</Card.Text>
								) : (
									false
								)}
								{bio ? (
									<Card.Text className='text-lg mt-2 font-weight-bold'>
										About me: {bio}
									</Card.Text>
								) : (
									false
								)}

								<br />
								<Button variant='info' href={html_url} className='text-center'>
									Checkout my page on GitHub
								</Button>
							</Card.Body>
							<ListGroup variant='info'>
								{location ? (
									<ListGroup.Item>Location: {location}</ListGroup.Item>
								) : (
									false
								)}
								{hireable ? (
									<ListGroup.Item>Job availabilty: {hireable}</ListGroup.Item>
								) : (
									false
								)}
								{updated_at ? (
									<ListGroup.Item>
										Last seen online: {updated_at}
									</ListGroup.Item>
								) : (
									false
								)}
								{followers ? (
									<ListGroup.Item>Followers: {followers}</ListGroup.Item>
								) : (
									false
								)}
								{following ? (
									<ListGroup.Item>Following: {following}</ListGroup.Item>
								) : (
									false
								)}
								{blog ? (
									<ListGroup.Item>Webpage: {blog}</ListGroup.Item>
								) : (
									false
								)}
							</ListGroup>
							<Button
								variant='info'
								href={`${html_url}?tab=repositories`}
								className='mb-2 text-center'
							>
								{`Checkout my ${
									public_repos && public_repos
								} repository on GitHub`}
							</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default UserProfile;
