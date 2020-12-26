import React, { Component } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PlacesAutocomplete from 'react-places-autocomplete';

import { compose } from '../../utils';
import { cityAdded } from '../../actions';
import { withWeatherService } from '../hoc';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#afafaf',
		},
	},
});

const styles = {
	form: {
		display: 'flex',
		justifyContent: 'center',
	},
	box: {
		width: '70%',
	},
	input: {
		width: '100%',
		marginBottom: 5,
		fontFamily: `'Roboto Slab', serif`,
	},
	button: {
		height: 48,
	},
	span: {
		padding: 6,
		fontFamily: `'Roboto Slab', serif`,
	},
};
class CityAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = { address: '' };
	}

	handleChange = (address) => {
		this.setState({ address });
	};

	handleSelect = (address) => {
		this.setState({ address });
		this.onClick();
	};

	onClick = () => {
		this.props.onAddedNewCiy(this.state.address);
		this.setState({
			address: '',
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<PlacesAutocomplete value={this.state.address} onChange={this.handleChange} onSelect={this.handleSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps }) => (
					<ThemeProvider theme={theme}>
						<form className={classes.form}>
							<Box className={classes.box}>
								<TextField
									{...getInputProps()}
									label='You City'
									color='primary'
									className={classes.input}
								/>
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
												<span className={classes.span}>{suggestion.description}</span>
											</div>
										);
									})}
								</div>
							</Box>
							<Button className={classes.button} onClick={this.onClick} size='small'>
								Add City
							</Button>
						</form>
					</ThemeProvider>
				)}
			</PlacesAutocomplete>
		);
	}
}

const mapSrateToProps = ({ city }) => {
	return { city };
};

const mapDispatchToProps = (dispatch, { weatherService }) => {
	return {
		onAddedNewCiy: (item) => {
			weatherService.getCityItem(item).then((data) => dispatch(cityAdded(data)));
		},
	};
};

export default compose(
	withStyles(styles),
	withWeatherService(),
	connect(mapSrateToProps, mapDispatchToProps)
)(CityAddForm);
