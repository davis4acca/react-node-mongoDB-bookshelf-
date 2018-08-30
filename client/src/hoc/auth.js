import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions';

export default function authHOC(ComposedClass, reload) {
	class AuthenticationCheck extends Component {
		state = {
			loading: false
		};

		componentWillMount() {
			this.props.dispatch(auth());
		}

		componentWillReceiveProps(nextProps) {
			this.setState({ loading: false });

			// if (!nextProps.user.login.isAuth) {
			// } else {
			// }
		}

		render() {
			if (this.state.loading) {
				return <div className="">Loading...</div>;
			}
			return <ComposedClass {...this.props} user={this.props.user} />;
		}
	}

	function mapStateToProps(state) {
		return {
			user: state.user
		};
	}

	return connect(mapStateToProps)(AuthenticationCheck);
}
