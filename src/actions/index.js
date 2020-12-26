const cityLoaded = (city) => {
	return {
		type: 'FETCH_CITY_LOADED',
		payload: city,
	};
};

const cityRequested = () => {
	return {
		type: 'FETCH_CITY_REQUESTED',
	};
};

const cityError = (error) => {
	return {
		type: 'FETCH_CITY_FAILURE',
		payload: error,
	};
};

const cityAdded = (newCity) => {
	return {
		type: 'ADD_TO_CITY_LIST',
		payload: newCity,
	};
};

const cityDelete = (deleteId) => {
	return {
		type: 'DELETE_ON_CITY_LIST',
		payload: deleteId,
	};
};

const fetchCitis = (weatherService, dispatch) => () => {
	dispatch(cityRequested());
	weatherService
		.getCityData()
		.then((data) => dispatch(cityLoaded(data)))
		.catch((err) => dispatch(cityError(err)));
};

const myWeatherRequested = () => {
	return {
		type: 'FETCH_MY_WEATHER_REQUESTED',
	};
};

const myWeatherLoaded = (myWeather) => {
	return {
		type: 'FETCH_MY_WEATHER_LOADED',
		payload: myWeather,
	};
};

const fetchMyWeather = (weatherService, dispatch) => () => {
	dispatch(myWeatherRequested());
	weatherService.getMyWeather().then((data) => dispatch(myWeatherLoaded(data)));
};

const myWeatherRefresh = (newWeather) => {
	return {
		type: 'REFRESH_MY_WEATHER',
		payload: newWeather,
	};
};

const fetchMyWeatherRefresh = (weatherService, dispatch) => () => {
	dispatch(myWeatherRequested());
	weatherService.getMyWeather().then((data) => dispatch(myWeatherRefresh(data)));
};

export { fetchCitis, cityAdded, cityDelete, fetchMyWeather, fetchMyWeatherRefresh };
