import axios from 'axios';

export function getBooks(limit = 10, start = 0, order = 'asc', list = '') {
	const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`).then(function(response) {
		return list ? [ ...list, ...response.data ] : response.data;
	});

	return {
		type: 'GET_BOOKS',
		payload: request
	};
}

export function getBookWithReviewer(id) {
	const request = axios.get(`/api/getBook?id=${id}`);

	return (dispatch) => {
		request.then(({ data }) => {
			let book = data;

			axios.get(`/api/getReviewer?id=${book.ownerId}`).then(({ data }) => {
				let response = {
					book,
					reviwer: data
				};

				dispatch({
					type: 'GET_BOOKS_W_REVIWER',
					payload: response
				});
			});
		});
	};
}

export function clearBookWithReviewer(id) {
	return {
		type: 'CLEAR_BOOK_W_REVIEWER',
		payload: {
			book: {},
			reviewer: {}
		}
	};
}

/*============USER============*/

export function loginUser({ email, password }) {
	const request = axios.post('/api/login', { email, password }).then((response) => response.data);

	return {
		type: 'USER_LOGIN',
		payload: request
	};
}
