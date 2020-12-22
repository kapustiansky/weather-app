class WeatherService {
	async getMyCityWeather() {
		const SS = JSON.parse(sessionStorage.getItem('myCity'));
		const URL =
		`https://api.openweathermap.org/data/2.5/onecall?lat=${SS.lat}&lon=${SS.lon}&exclude=minutely,alerts&appid=9db1d496a91bad902ebeff185ff91bdf&units=metric`;
		const response = await fetch(URL);
		const data = await response.json();
		return data;
	}

	getCityData() {
		const arr = [];

		if (localStorage.getItem('citisData')) {
			const citisArray = JSON.parse(localStorage.getItem('citisData'));
			citisArray.map((item) => {
				const API_KAY = '9db1d496a91bad902ebeff185ff91bdf';
				const URL =
				`https://api.openweathermap.org/data/2.5/weather?q=${item.name}&appid=${API_KAY}&units=metric`;
				fetch(URL)
					.then((response) => {

						if(response.status !== 200) {						
							throw new Error("Что-то пошло не так! Перезагрузите страницу.");
						}
						return response.json();
					})
					.then((data) => {			
						const { coord, id, name, main: { feels_like, temp, temp_max, temp_min }, weather: [iconData] } = data;
						const cityWeather = {
							coord,
							id,
							name,
							t: Math.trunc(temp),
							feels_like: Math.trunc(feels_like),
							temp_min: Math.trunc(temp_min),
							temp_max: Math.trunc(temp_max),
							icon: iconData.icon
						}
						arr.push(cityWeather);
					})
					.catch((err)  =>  {
						
						if (err.message === "Что-то пошло не так! Перезагрузите страницу.") {
							alert(err.message)
						}
						else {
							throw err;
						}						
					})
			});	
		}
		return (
			new Promise((resolve, reject) => {
				setTimeout(() => {
					try {
						resolve(arr);
					} catch {
						reject(new Error('Что-то пошло не так!!!'))
					}
				}, 700);				
			}));
	}
}

export default WeatherService;
