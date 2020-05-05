import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AlertComp from './components/layout/AlertComp';
import axios from 'axios';
import './App.css';
import Navigation from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Search from './components/Search';
import About from './components/pages/About';
import Users from './components/users/Users';
import UserProfile from './components/pages/UserProfile';

class App extends Component {
	state = {
		githubusers: [],
		user: '',
		userProfile: {},
		loading: false,
		alertMsg: null,
	};

	// async componentDidMount() {
	// 	const res = await axios.get(`https://api.github.com/users`);
	// 	this.setState({ githubusers: res.data });
	// }

	searchUpdate = (e) => {
		this.setState({ user: e.target.value });
		// console.log(this.state.user);
	};

	searchUser = async (e) => {
		e.preventDefault();
		if (this.state.user === '') {
			e.preventDefault();
			this.setState({ alertMsg: { msg: 'Please enter a username' } });
			setTimeout(() => {
				this.setState({ alertMsg: null });
			}, 3000);
		} else {
			this.setState({ loading: true });

			const username = this.state.user;

			const res = await axios.get(
				`https://api.github.com/search/users?q=${username}`
			);

			this.setState({ githubusers: res.data.items, loading: false, user: '' });
		}
	};

	getUserProfile = async () => {
		const profileName = { ...this.state.githubusers[0] }.login;

		const res = await axios.get(`https://api.github.com/users/${profileName}`);

		this.setState({ userProfile: res.data });
	};

	clearUsers = () => {
		this.setState({ githubusers: [] });
	};

	render() {
		const { alertMsg, userProfile, githubusers, user, loading } = this.state;
		return (
			<Router>
				<div id='page-container'>
					<Navigation />
					<br />
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<Fragment>
									<AlertComp alert={alertMsg} />
									<Search
										searchUser={this.searchUser}
										searchUpdate={this.searchUpdate}
										user={user}
										clearUsers={this.clearUsers}
										showClear={this.state.githubusers.length > 0 ? true : false}
									/>
									<br />

									<Container className='d-flex justify-content-between'>
										<Row>
											{githubusers.map((githubuser, key) => (
												<Col sm={6} md={4} key={githubuser.id} className='pb-4'>
													<Users
														key={githubuser.id}
														githubuser={githubuser}
														loading={loading}
														userProfile={userProfile}
														getUserProfile={this.getUserProfile}
													/>
												</Col>
											))}
										</Row>
									</Container>
								</Fragment>
							)}
						/>
						<Route exact path='/about' component={About} />
						<Route
							exact
							path='/user/:login'
							render={(props) => (
								<UserProfile
									getUserProfile={this.getUserProfile}
									userProfile={userProfile}
								/>
							)}
						/>
					</Switch>
					<br />
					<br />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
