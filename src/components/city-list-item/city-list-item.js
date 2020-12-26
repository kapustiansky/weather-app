import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles, Card, CardActions, CardContent, Button, Typography, Box, IconButton } from '@material-ui/core';

import { withWeatherService } from '../hoc';
import { fetchMyWeather } from '../../actions';
import { compose } from '../../utils';

const useStyles = makeStyles({
	card: {
		maxWidth: 250,
		background: 'linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, #f7f7f7 50%, rgb(255 255 255 / 0%) 100%)',
		margin: 'auto',
		boxShadow: 'none',
		opacity: 0,
		animation: '$slide-bottom-cd 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.1s both',
	},
	'@keyframes slide-bottom-cd': {
		'0%': {
			transform: 'translateY(-200px)',
		},
		'100%': {
			transform: 'translateY(0px)',
			opacity: 1,
		},
	},
	boxMinMaxTemp: {
		width: '60%',
	},
	typogrMinMaxTemp: {
		fontFamily: `'Merriweather', serif`,
	},
	buttons: {
		paddingTop: 0,
		justifyContent: 'space-between',
	},
	typogrTemp: {
		fontSize: 60,
		'@media (max-width:960px)': {
			fontSize: 45,
		},
	},
	typogrCityName: {
		fontSize: 24,
		'@media (max-width:960px)': {
			fontSize: 20,
		},
		fontFamily: `'Roboto Slab', serif`,
	},
});

const CityListItem = ({ cityData, deleteCityItem, fetchMyCityWeather }) => {
	const { coord, name, t, feels_like, temp_min, temp_max, icon } = cityData;
	const classes = useStyles();

	const deleteItem = () => {
		const localStArr = JSON.parse(localStorage.getItem('citisData'));
		const newLocalStArr = localStArr.filter((item) => item.id !== deleteCityItem().payload);
		localStorage.setItem('citisData', JSON.stringify(newLocalStArr));
	};

	const sessionStoragePushitem = () => {
		const sessionStData = {
			...coord,
			name: name,
		};
		sessionStorage.setItem('myCity', JSON.stringify(sessionStData));
		fetchMyCityWeather();
	};

	return (
		<Card className={classes.card}>
			<CardContent>
				<Box>
					<Box display='flex' justifyContent='space-evenly' alignItems='center'>
						<img src={`https://openweathermap.org/img/w/${icon}.png`} alt='Icon current' />
						<Typography className={classes.typogrTemp} variant='h2'>
							{t}&#8451;
						</Typography>
					</Box>
					<Typography className={classes.bg} variant='subtitle2'>
						Feels Like: {feels_like}&#8451;
					</Typography>
				</Box>
				<Typography className={classes.typogrCityName} variant='h5' component='h1'>
					{name}
				</Typography>
				<Box display='flex' justifyContent='space-between' className={classes.boxMinMaxTemp}>
					<Typography variant='body2' component='p' className={classes.typogrMinMaxTemp}>
						min: {temp_min}&#8451;
					</Typography>
					<Typography variant='body2' component='p' className={classes.typogrMinMaxTemp}>
						max: {temp_max}&#8451;
					</Typography>
				</Box>
			</CardContent>
			<CardActions className={classes.buttons}>
				<Link to='/cart' onClick={sessionStoragePushitem}>
					<Button size='small'>Detail inf...</Button>
				</Link>
				<IconButton onClick={deleteItem} aria-label='delete' size='small'>
					<HighlightOffIcon fontSize='small' />
				</IconButton>
			</CardActions>
		</Card>
	);
};

const mapSrateToProps = ({ myCityWeather, loading }) => {
	return { myCityWeather, loading };
};

const mapDispatchToProps = (dispatch, { weatherService }) => {
	return {
		fetchMyCityWeather: fetchMyWeather(weatherService, dispatch),
	};
};

export default compose(withWeatherService(), connect(mapSrateToProps, mapDispatchToProps))(CityListItem);
