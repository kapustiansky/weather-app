import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { compose } from '../../utils';
import { cityItemAdded } from '../../actions';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#afafaf',
		},
  }})

const styles = {
    form: {
	  display: 'flex',
	  justifyContent: 'center'
	},
	input: {
		width: '70%'
	}
  }

const citisArray = localStorage.getItem('citisData') ? JSON.parse(localStorage.getItem('citisData')) : [];
const API_KAY = '9db1d496a91bad902ebeff185ff91bdf';

class CityAddForm extends Component {
	state = {
		value: '',
	  }	  

	onSubmit = (e) => {
		e.preventDefault();
		const value  = this.state.value;
		const cityValue = value.split(',')[0];

		this.setState({
			value: '',
		  });

		const URL =
			`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KAY}&units=metric`;

  		fetch(URL)
			.then((response) => {

				if(response.status === 200) {						
					return response.json();

				} else if(response.status === 404) {
					throw new Error("Нет данных по вашему городу! Проверьте правильность ввода.");

				} else {
					throw new Error("Что-то пошло не так, попробуйте еще раз.");
				}
				})
			.then((data) => {			
				const { id, name, main: { feels_like, temp, temp_max, temp_min }, weather: [iconData] } = data;
				const cityWeather = {
					id: id,
					name: name,
					t: Math.trunc(temp),
					feels_like: Math.trunc(feels_like),
					temp_min: Math.trunc(temp_min),
					temp_max: Math.trunc(temp_max),
					icon: iconData.icon
				}

				citisArray.push({
					id: cityWeather.id,
					name: cityWeather.name,
				});
				localStorage.setItem('citisData', JSON.stringify(citisArray));
				
				setTimeout(this.props.onAddedNewCiy(cityWeather), 400);
				})
			.catch((err) => alert(err.message))
	}
	  
	onChange = (e) => {
        this.setState({
        	value: e.target.value
        });
	}

	render() {
		const { classes } = this.props;
		return (			
			<ThemeProvider theme={theme}>
				<form onSubmit={this.onSubmit} className={classes.form}>
					<TextField onChange={this.onChange} value={this.state.value} className={classes.input} label="You City" color="primary"/>
					<Button type="submit"  size="small">Add City</Button>
				</form>
			</ThemeProvider>
		);
	}
}

const mapSrateToProps = ({ city }) => {
    return { city }
}

const mapDispatchToProps = (dispatch) => {
    return {
		onAddedNewCiy: (newCityItem) => dispatch(cityItemAdded(newCityItem))
    }
}

export default compose(
	withStyles(styles),
	connect(mapSrateToProps, mapDispatchToProps)
)(CityAddForm);