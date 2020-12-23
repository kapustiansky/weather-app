const cityLoaded = (newCity) => {
	return {
		type: 'FETCH_CITY_LOADED',
		payload: newCity
	};
};

const cityRequested = () => {
	return {
		type: 'FETCH_CITY_REQUESTED'
	}
};

const cityError = (error) => {
	return {
		type: 'FETCH_CITY_FAILURE',
		payload: error
	}
}

const fetchCitis = (weatherService, dispatch) => () => {
	dispatch(cityRequested());
	weatherService.getCityData()
		.then((data) => dispatch(cityLoaded(data)))
		.catch((err) => dispatch(cityError(err)));
}

export const cityItemAdded = (newCityItem) => {
	return {
		type: 'ITEM_ADDED_TO_CITY',
		payload: newCityItem
	};
};

export const deleteItem = (deleteId) => {
	return {
		type: 'ITEM_CITY_DELETE',
		payload: deleteId
	};
};

const myCityWeatherLoaded = (myWeather) => {
	return {
		type: 'FETCH_MY_CITY_WEATHER_LOADED',
		payload: myWeather
	};
};

const myCityWeatherRequested = () => {
	return {
		type: 'FETCH_MY_CITY_WEATHER_REQUESTED'
	}
};

const fetchMyCityWeather = (weatherService, dispatch) => () => {
	dispatch(myCityWeatherRequested());
	weatherService.getMyCityWeather()
		.then((data) => dispatch(myCityWeatherLoaded(data)))
}

const myWeatherRemovedFromCart = (newData) => {
	return {
	  type: 'MY_WEATHER_REMOVED_FROM_CART',
	  payload: newData
	};
};

const fetchMyWeatherRemoved = (weatherService, dispatch) => () => {
	dispatch(myCityWeatherRequested());
	weatherService.getMyCityWeather()
		.then((data) => dispatch(myWeatherRemovedFromCart(data)))
}

export {
	fetchCitis,
	fetchMyCityWeather,
	fetchMyWeatherRemoved
};