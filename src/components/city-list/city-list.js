import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, makeStyles } from '@material-ui/core';

import { compose } from '../../utils';
import CityListItem from '../city-list-item';
import { withWeatherService } from '../hoc';
import { fetchCitis, cityDelete } from '../../actions';
import Spinner from '../spinner';
import CityAddForm from '../city-add-form';
import ErrorIndicator from '../error-indicator';

const useStyles = makeStyles({
	gridCont: {
		width: '100%',
		justifyContent: 'center',
	},
});

const CityList = ({ city, deleteCityItem }) => {
	const classes = useStyles();
	return (
		<Grid container spacing={2} className={classes.gridCont}>
			{city.map((cityData) => {
				return (
					<Grid key={cityData.id} item xs={6} sm={3} lg={2}>
						<CityListItem cityData={cityData} deleteCityItem={() => deleteCityItem(cityData.id)} />
					</Grid>
				);
			})}
			<Grid style={{ padding: 20 }} item xs={12}>
				<CityAddForm />
			</Grid>
		</Grid>
	);
};
class CityListContainer extends Component {
	componentDidMount() {
		this.props.fetchCityFun();
	}

	render() {
		const { city, loading, error, deleteCityItem } = this.props;

		if (loading) {
			return <Spinner />;
		}

		if (error) {
			return <ErrorIndicator />;
		}

		return <CityList city={city} deleteCityItem={deleteCityItem} />;
	}
}

const mapSrateToProps = ({ city, loading, error }) => {
	return { city, loading, error };
};

const mapDispatchToProps = (dispatch, { weatherService }) => {
	return {
		fetchCityFun: fetchCitis(weatherService, dispatch),
		deleteCityItem: (id) => dispatch(cityDelete(id)),
	};
};

export default compose(withWeatherService(), connect(mapSrateToProps, mapDispatchToProps))(CityListContainer);
