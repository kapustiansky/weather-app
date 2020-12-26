const initialState = {
	city: [],
	loading: true,
	error: null,
	myWeather: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_CITY_REQUESTED':
			return {
				city: [],
				loading: true,
				error: null,
				myCityWeather: {},
			};
		case 'FETCH_CITY_LOADED':
			return {
				city: action.payload,
				loading: false,
				error: null,
				myCityWeather: {},
			};
		case 'FETCH_CITY_FAILURE':
			return {
				city: [],
				loading: false,
				error: action.payload,
				myCityWeather: {},
			};
		case 'ADD_TO_CITY_LIST':
			const newCityItem = action.payload;
			return {
				...state,
				city: [...state.city, newCityItem],
			};
		case 'DELETE_ON_CITY_LIST':
			const eventId = action.payload;
			const newArr = state.city.filter((item) => item.id !== eventId);
			return {
				...state,
				city: newArr,
			};
		case 'FETCH_MY_WEATHER_REQUESTED':
			return {
				...state,
				loading: true,
				myWeather: {},
			};
		case 'FETCH_MY_WEATHER_LOADED':
			return {
				...state,
				loading: false,
				myWeather: action.payload,
			};
		case 'REFRESH_MY_WEATHER':
			return {
				...state,
				loading: false,
				myWeather: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
