import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import WeatherService from './services/weather-service';
import { WeatherServiceProvider } from './components/weather-service-context';

import store from './store';
import './index.css';

const weatherService = new WeatherService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<WeatherServiceProvider value={weatherService}>
				<HashRouter>
					<App />
				</HashRouter>
			</WeatherServiceProvider>
		</ErrorBoundry>
	</Provider>,

	document.getElementById('root')
);
