import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Nav from './Sidenav/sidenav';

class Header extends Component {
	state = {
		showNav: false
	};

	onHideNav = () => {
		this.setState({ showNav: false });
	};

	render() {
		return (
			<header>
				<div className="open_nav">
					<FontAwesome
						onClick={() => {
							this.setState({ showNav: true });
						}}
						name="bars"
						style={{
							color: '#fff',
							padding: '10px',
							cursor: 'pointer'
						}}
					/>
				</div>
				<Nav
					onHideNav={() => {
						this.onHideNav();
					}}
					showNav={this.state.showNav}
				/>

				<Link to="/" className="logo">
					The book Shelf
				</Link>
			</header>
		);
	}
}

export default Header;
