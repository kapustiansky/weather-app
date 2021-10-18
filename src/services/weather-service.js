class WeatherService {
	async getMyWeather() {
		const SH_ST = JSON.parse(sessionStorage.getItem('myCity'));
		const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${SH_ST.lat}&lon=${SH_ST.lon}&exclude=minutely,alerts&appid=9db1d496a91bad902ebeff185ff91bdf&units=metric`;
		const response = await fetch(URL);
		const data = await response.json();
		return data;
	}

	async getCityItem(newCityItem) {
		try {
			const citisArray = localStorage.getItem('citisData')
				? JSON.parse(localStorage.getItem('citisData'))
				: [];
			const API_KAY = process.env.REACT_APP_WEATHER_KAY;
			const cityValue = newCityItem.split(',')[0];
			const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KAY}&units=metric`;
			const response = await fetch(URL);
			const data = await response.json();
			const {
				coord,
				id,
				name,
				main: { feels_like, temp, temp_max, temp_min },
				weather: [iconData],
			} = await data;
			const cityWeather = await {
				coord,
				id: id,
				name: name,
				t: Math.trunc(temp),
				feels_like: Math.trunc(feels_like),
				temp_min: Math.trunc(temp_min),
				temp_max: Math.trunc(temp_max),
				icon: iconData.icon,
			};
			await citisArray.push({
				id: cityWeather.id,
				name: cityWeather.name,
			});
			localStorage.setItem('citisData', JSON.stringify(citisArray));

			return cityWeather;
		} catch (err) {
			const error = new Error(
				'No data for your city! Check if the entry is correct.'
			);
			alert(error.message);
		}
	}

	getCityData() {
		const arr = [];

		if (localStorage.getItem('citisData')) {
			const citisArray = JSON.parse(localStorage.getItem('citisData'));
			citisArray.map((item) => {
				const API_KAY = process.env.REACT_APP_WEATHER_KAY;
				const URL = `https://api.openweathermap.org/data/2.5/weather?q=${item.name}&appid=${API_KAY}&units=metric`;
				fetch(URL)
					.then((response) => {
						if (response.status !== 200) {
							throw new Error(
								'Something wrong! Reload the page.'
							);
						}
						return response.json();
					})
					.then((data) => {
						const {
							coord,
							id,
							name,
							main: { feels_like, temp, temp_max, temp_min },
							weather: [iconData],
						} = data;
						const cityWeather = {
							coord,
							id,
							name,
							t: Math.trunc(temp),
							feels_like: Math.trunc(feels_like),
							temp_min: Math.trunc(temp_min),
							temp_max: Math.trunc(temp_max),
							icon: iconData.icon,
						};
						arr.push(cityWeather);
					})
					.catch((err) => {
						if (
							err.message === 'Something wrong! Reload the page.'
						) {
							alert(err.message);
						} else {
							throw err;
						}
					});
			});
		}
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					resolve(arr);
				} catch {
					reject(new Error('Something wrong!!!'));
				}
			}, 700);
		});
	}
}

export default WeatherService;
