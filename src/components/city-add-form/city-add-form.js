import React, { Component } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PlacesAutocomplete from 'react-places-autocomplete';

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
	box: {
		width: '70%'
	},
	input: {
		width: '100%',
		marginBottom: 5,
		fontFamily: `'Roboto Slab', serif`
	},
	button: {
		height: 48
	},
	span: {
		padding: 6,
		fontFamily: `'Roboto Slab', serif`
	}
  }

const citisArray = localStorage.getItem('citisData') ? JSON.parse(localStorage.getItem('citisData')) : [];
const API_KAY = '9db1d496a91bad902ebeff185ff91bdf';

class CityAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = { address: '' };
	}
	 
	handleChange = (address) => {
		this.setState({ address });
	}
	 
	handleSelect = (address) => {
		this.setState({ address });
		setTimeout(() => {
			this.onClick();
		}, 100);
	}

	onClick = async () => {
		try {
			const value  = this.state.address;
			const cityValue = value.split(',')[0];	
			const URL =
				`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KAY}&units=metric`;	
			const response = await fetch(URL);
			const data = await response.json();
			const { coord, id, name, main: { feels_like, temp, temp_max, temp_min }, weather: [iconData] } = await data;
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

			this.setState({
				address: '',
			});

			return await (
				citisArray.push({
					id: cityWeather.id,
					name: cityWeather.name,}),
				localStorage.setItem('citisData', JSON.stringify(citisArray)),
				this.props.onAddedNewCiy(cityWeather)
			)
		} catch(err) {
			const error = new Error("Нет данных по вашему городу! Проверьте правильность ввода.");
			alert(error.message);
		}
	}

	render() {
		const { classes } = this.props;
		return (			
			<PlacesAutocomplete
				value={this.state.address}
				onChange={this.handleChange}
				onSelect={this.handleSelect}
			>
			{({ getInputProps, suggestions, getSuggestionItemProps }) => (
				<ThemeProvider theme={theme}>
					<form className={classes.form}>
						<Box className={classes.box}>
							<TextField
								{...getInputProps()}
								label="You City" 
								color="primary"
								className={classes.input}/>
							<div>
								{suggestions.map((suggestion) => {
								const className = suggestion.active
								? 'suggestion-item--active'
								: 'suggestion-item';
								const style = suggestion.active
								? { cursor: 'pointer', color: '#000000', fontSize: 17, transition: '0.2s' }
								: { cursor: 'pointer', color: '#7f7f7f', transition: '0.2s' };

								return (
								<div
								key={suggestion.placeId}
								{...getSuggestionItemProps(suggestion, {
								className,
								style,
								})}>
									<span
									className={classes.span}>
										{suggestion.description}
									</span>
								</div>
								);
								})}
							</div>
						</Box>
						<Button className={classes.button} onClick={this.onClick} size="small">Add City</Button>
					</form>
				</ThemeProvider>
			)}
			</PlacesAutocomplete>	
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