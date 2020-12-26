import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePege, CartPage } from '../pages';

const App = () => {
	return (
		<Switch>
			<Route path='/' component={HomePege} exact />
			<Route path='/cart' component={CartPage} />
		</Switch>
	);
};

export default App;
