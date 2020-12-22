import React from 'react';
import {  
    Box,
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    card: {
        background: 
         'linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, #f1f1f1 50%, rgb(255 255 255 / 0%) 100%)',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        padding: '.3rem .2rem',
        width: 120,
        borderRadius: 0,
        opacity: 0,
        animation: '$rotate-vert-center-d 0.6s cubic-bezier(0.550, 0.055, 0.675, 0.190) 1.2s both'
    },
    '@keyframes rotate-vert-center-d': {
        '0%': {
            transform: 'rotateY(0)',
        },
        '100%': {
            transform: 'rotateY(360deg)',
            opacity: 1,
        },
      },
    gridContainer: {
        justifyContent: 'center'
    },
    typogrNum1: {
        fontFamily: `'Merriweather', serif`,
        fontSize: '1rem',
        fontWeight: 'bold'
    },
    typogrNum2: {
        fontFamily: `'Merriweather', serif`,
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#5d5d5d'
    },
    typogrH2: {
        fontFamily: `'Roboto Slab', serif`,
        textAlign: 'center',
        fontSize: '.9rem'
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center'
    }
  });

const MyCityDaily = ({ daily }) => {
    const classes = useStyles();
    return ( 
        <Grid container spacing={1} className={classes.gridContainer}>
            {
            daily.map((dailyWeather, index) => {
                const { dt, temp, weather: [ iconData ] } = dailyWeather;
                const fullDate = new Date(dt * 1000);
                const month = fullDate.getMonth() + 1;
                const date = (fullDate.getDate() < 10 ? '0' : '') + fullDate.getDate();
                const currentDate = `${date}.${month}`;
            	return (
            	    <Grid key={index} item xs={6} sm={3} lg={2} className={classes.gridItem}>
                        <Card className={classes.card}>
                            <Typography variant="subtitle2" component="h3" className={classes.typogrNum1}>
                                {currentDate}
                            </Typography>
                            <img src={`https://openweathermap.org/img/w/${iconData.icon}.png`} alt={`${iconData.description} weather`}/>
                            <Typography variant="caption" component="h2" className={classes.typogrH2}>
                                {iconData.description}
                            </Typography>
                            <Box display="flex">
                                <Typography variant="subtitle2" className={classes.typogrNum1}>
                                    {Math.trunc(temp.morn)}&deg;/
                                </Typography>
                                <Typography variant="subtitle2" className={classes.typogrNum2}>
                                    {Math.trunc(temp.night)}&deg;
                                </Typography>
                            </Box>
                        </Card>
            	    </Grid>
            	)})
            }
        </Grid>
    )
}

export default MyCityDaily;