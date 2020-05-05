import React from 'react';
import { Form, FormControl, Container, Button } from 'react-bootstrap';

const Search = ({ searchUser, searchUpdate, user, clearUsers, showClear }) => {
	return (
		<Container className='d-flex'>
			<Form inline onSubmit={searchUser} className='mb-2'>
				<FormControl
					type='text'
					placeholder='search a user...'
					className='mr-sm-2'
					value={user}
					onChange={searchUpdate}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-info'
					variant='info'
				/>
			</Form>

			{showClear && (
				<Button
					style={{ padding: '6px 14px', margin: '2px 2px' }}
					onClick={clearUsers}
					variant='danger'
					className='mx-2 mb-2'
				>
					Clear
				</Button>
			)}
		</Container>
	);
};

export default Search;
