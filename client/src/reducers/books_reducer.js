export default function(state = {}, action) {
	switch (action.type) {
		case 'GET_BOOKS':
			return {
				...state,
				list: action.payload
			};
		case 'GET_BOOKS_W_REVIWER':
			return {
				...state,
				book: action.payload.book,
				reviewer: action.payload.reviwer
			};

		case 'CLEAR_BOOK_W_REVIEWER':
			return {
				...state,
				book: action.payload.book,
				reviewer: action.payload.reviwer
			};

		default:
			return state;
	}
}
