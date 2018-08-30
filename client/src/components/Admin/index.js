import React from 'react';

const User = (props) => {
	console.log(props);
	console.log('yo');
	return (
		<div className="user_container">
			<div className="avatar">
				<img alt="avatar" src="https://www.dreamwallets.com/img/avatar.jpg" />
			</div>
			<div className="nfo">
				<div>
					<span>Name:</span>
					<span>name</span>
				</div>
				<div>
					<span>Lastname:</span>
					<span>lastname</span>
				</div>
				<div>
					<span>Email:</span>
					<span>email</span>
				</div>
			</div>
		</div>
	);
};

export default User;
