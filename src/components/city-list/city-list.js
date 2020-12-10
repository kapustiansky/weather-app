import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import { compose } from '../../utils';
import CityListItem from '../city-list-item';
import { withWeatherService } from '../hoc';
import { fetchCitis, deleteItem } from '../../actions';
import Spinner from '../spinner';
import CityAddForm from '../city-add-form';
import ErrorIndicator from '../error-indicator';

const CityList = ({ city, deleteCityItem }) => {
    return ( 
        <Grid container spacing={2} justify="center">
            {
                city.map((cityData) => {    
                	return (
                	    <Grid key={cityData.id} item xs={6} sm={3} lg={2}>
                	        <CityListItem cityData={cityData} deleteCityItem={() => deleteCityItem(cityData.id)}/>
                	    </Grid>
                	);
                })
            }
            <Grid style={{ padding: 20 }} item xs={12}>
                <CityAddForm />
            </Grid>
        </Grid>   
    )
}
class CityListContainer extends Component {
	componentDidMount() {
        this.props.fetchCitis();
	}

    render() {
        const { city, loading, error, deleteCityItem } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <CityList city={city} deleteCityItem={deleteCityItem}/>
    }
}

const mapSrateToProps = ({ city, loading, error }) => {
    return { city, loading, error }
}

const mapDispatchToProps = (dispatch, { weatherService }) => {
    return {
        fetchCitis: fetchCitis(weatherService, dispatch),
        deleteCityItem: (id) => dispatch(deleteItem(id))
    }
}

export default compose(
	withWeatherService(),
	connect(mapSrateToProps, mapDispatchToProps)
)(CityListContainer);