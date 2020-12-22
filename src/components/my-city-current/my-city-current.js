import React from 'react';
import {  
    Box,
    makeStyles,
    Typography
} from '@material-ui/core';

import myHumidity from './icons/myHumidity.svg';
import myPressure from './icons/myPressure.svg';
import myWind from './icons/myWind.svg';


const useStyles = makeStyles({
	box: {
        padding: '.5rem 2rem',
        background: 
         'linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, #f1f1f1 50%, rgb(255 255 255 / 0%) 100%)',
      },
    icon: {
        width: 25
    },
    hr: {
       height: 100,
    },
    fontTypogr: {
        fontFamily: `'Merriweather', serif`
    }
  });

const MyCityCurrent = ({ current }) => {
    const classes = useStyles();
    const { feels_like, humidity, pressure, temp, weather: [ iconData ], wind_speed } = current;

    return ( 
        <Box className={classes.box}>
			<Box display="flex" justifyContent="space-between" alignItems="center">
                <img src={`https://openweathermap.org/img/w/${iconData.icon}.png`} alt={`${iconData.description} weather`}/>
				<Typography variant="h2">
					{Math.trunc(temp)}&#8451;
				</Typography>
			</Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom='3rem'>
                <Typography className={classes.fontTypogr} variant="subtitle2">
			    	{iconData.main}
			    </Typography>
                <Typography className={classes.fontTypogr} variant="subtitle2">
			    	Feels Like:  {Math.trunc(feels_like)}&#8451;
			    </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box textAlign="center">
                    <img src={myWind} alt="Wind" className={classes.icon} />
                    <Typography className={classes.fontTypogr} variant="subtitle2">
                        {wind_speed}m/s
                    </Typography>
                </Box>
                <hr className={classes.hr}/>
                <Box textAlign="center">
                    <img src={myPressure} alt="Pressure" className={classes.icon} />
                    <Typography className={classes.fontTypogr} variant="subtitle2">
                        {pressure}hPa
                    </Typography>
                </Box>
                <hr className={classes.hr}/>
                <Box textAlign="center">
                    <img src={myHumidity} alt="Humidity" className={classes.icon} />
                    <Typography className={classes.fontTypogr} variant="subtitle2">
                        {humidity}%
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default MyCityCurrent;