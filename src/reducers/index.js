const initialState = {
	city: [],
	loading: true,
	error: null
};

const reducer = (state = initialState, action) => {
	
	//console.log(action.type)
	switch (action.type) {
		case 'FETCH_CITY_REQUESTED':
			return {
				city: [],
				loading: true,
				error: null
			};
		case 'FETCH_CITY_LOADED':
			return {
				city: action.payload,
				loading: false,
				error: null
			};
		case 'FETCH_CITY_FAILURE':
			return {
				city: [],
				loading: false,
				error: action.payload
			};
		case 'ITEM_ADDED_TO_CITY':
			const newCityItem = action.payload;
			return {
				...state,
				city: [
					...state.city,
					newCityItem
				]
			};
		case 'ITEM_CITY_DELETE':
			const eventId = action.payload;
			const newArr = state.city.filter((item) => item.id !== eventId)
			return {
				...state,
				city: newArr
			};

		default:
			return state;
	}
};

export default reducer;