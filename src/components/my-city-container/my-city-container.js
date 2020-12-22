import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  
    Grid,
    withStyles,
} from '@material-ui/core';

import { compose } from '../../utils';
import { withWeatherService } from '../hoc';
import { fetchMyCityWeather } from '../../actions';
import Spinner from '../spinner';
import MyCityCurrent from '../my-city-current';
import MyCityHourly from '../my-city-hourly';
import MyCityDaily from '../my-city-daily';
import MyCityHeader from '../my-city-header';

const styles = {
    gridContainer: {
        height: '100vh',
    },
    gridItem1: {
        padding: '2rem',
        opacity: 0,
        animation: '$slide-bottom-cn 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.1s both'
    },
    '@keyframes slide-bottom-cn': {
        '0%': {
            transform: 'translateY(-200px)',
        },
        '100%': {
            transform: 'translateY(0px)',
            opacity: 1,
        },
      },
    gridItem2: {
        padding: '5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    hr: {
        width: '100%',
        margin: '2rem 0 2rem 0'
    },
}

class MyCityContainer extends Component {
	componentDidMount() {
        this.props.fetchMyCityWeather();
	}

    render() {
        const { myCityWeather, loading, classes } = this.props;
        const { daily, hourly, current } = myCityWeather;

        if (loading) {
            return <Spinner />;
        }

        return (
            <Grid container className={classes.gridContainer}>
                <Grid item xs={12} md={4} className={classes.gridItem1}>
                    <MyCityHeader dt={current.dt} />
                    <hr/>
                    <MyCityCurrent current={current}/>
                </Grid>
                <Grid item xs={12} md={8} className={classes.gridItem2}>
                    <MyCityHourly hourly={hourly} />
                    <hr className={classes.hr}/>
                    <MyCityDaily daily={daily} />
                </Grid>
            </Grid>
        );
    }
}

const mapSrateToProps = ({ myCityWeather, loading }) => {
    return { myCityWeather, loading }
}

const mapDispatchToProps = (dispatch, { weatherService }) => {
    return {
        fetchMyCityWeather: fetchMyCityWeather(weatherService, dispatch)
    }
}

export default compose(
    withStyles(styles),
	withWeatherService(),
	connect(mapSrateToProps, mapDispatchToProps)
)(MyCityContainer);