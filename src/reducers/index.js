const initialState = {
	city: [],
	loading: true,
	error: null,
	myCityWeather: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_CITY_REQUESTED':
			return {
				city: [],
				loading: true,
				error: null,
				myCityWeather: {}
			};
		case 'FETCH_CITY_LOADED':
			return {
				city: action.payload,
				loading: false,
				error: null,
				myCityWeather: {}
			};
		case 'FETCH_CITY_FAILURE':
			return {
				city: [],
				loading: false,
				error: action.payload,
				myCityWeather: {}
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
		case 'FETCH_MY_CITY_WEATHER_REQUESTED':		
			return {
				...state,
				loading: true,
				myCityWeather: {}
			};
		case 'FETCH_MY_CITY_WEATHER_LOADED':
			return {
				...state,
				loading: false,
				myCityWeather: action.payload
			};

		default:
			return state;
	}
};

export default reducer;