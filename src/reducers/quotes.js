export default (state = [], action) => {
	switch (action.type) {
		case "ADD_QUOTE":
			return [...state, action.quote];
		case "REMOVE_QUOTE":
			return [...state.filter(quote => quote.id !== action.quoteId)];
		case "UPVOTE_QUOTE":
			let quote = state.find(quote => quote.id === action.quoteId);
			return [
				...state.filter(quote => quote.id !== action.quoteId),
				{ ...quote, votes: quote.votes + 1 }
			];
		case "DOWNVOTE_QUOTE":
			quote = state.find(quote => quote.id === action.quoteId);
			return [
				...state.filter(quote => quote.id !== action.quoteId),
				{ ...quote, votes: quote.votes > 0 ? quote.votes - 1 : 0 }
			];
		default:
			return state;
	}
};
