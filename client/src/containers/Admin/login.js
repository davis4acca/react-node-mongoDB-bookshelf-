import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class Login extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		success: false
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.user.login.isAuth) {
			this.props.history.push('/user');
		}
	}

	handleInputEmail = (event) => {
		this.setState({ email: event.target.value });
	};

	handleInputPassword = (event) => {
		this.setState({ password: event.target.value });
	};

	submitForm = (event) => {
		event.preventDefault();
		this.props.dispatch(loginUser(this.state));
	};

	render() {
		let user = this.props.user;
		return (
			<div className="rl_container">
				<form onSubmit={this.submitForm}>
					<h2>Log in here</h2>

					<div className="form_element">
						<input
							onChange={this.handleInputEmail}
							value={this.state.email}
							type="email"
							placeholder="Enter your email"
						/>
					</div>

					<div className="form_element">
						<input
							onChange={this.handleInputPassword}
							type="password"
							placeholder="Enter your password"
							value={this.state.password}
						/>
					</div>
					<button type="submit"> Log in </button>
					<div className="error">{user.login ? <div>{user.login.message}</div> : null}</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(Login);
