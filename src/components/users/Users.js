import React from 'react';
import Loader from '../layout/Loader';
import UserItem from './UserItem';

const Users = ({
	loading,
	githubuser: { type, login, avatar_url },
	getUserProfile,
	userProfile,
}) => {
	if (loading) {
		return <Loader />;
	} else {
		return (
			<UserItem
				type={type}
				login={login}
				avatar={avatar_url}
				getUserprofile={getUserProfile}
				// userProfile={userProfile}
			/>
		);
	}
};

// const userGridStyle = {
// 	display: 'grid',
// 	gridTemplateColumns: 'repeat(3, 1fr)',
// 	gridGap: '0.2rem',
// };

export default Users;
