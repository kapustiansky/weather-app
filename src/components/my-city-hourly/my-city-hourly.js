import React from 'react';
import {  
    Box,
    makeStyles,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    boxCont: {
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        height: 170,
        width: '90%',
        boxShadow: 'inset 0px 0px 50px 30px rgb(226 226 226)',
        background: 
         '#e2e2e278',
    },
    box: {
        padding: '.3rem',
        textAlign: 'center',
        opacity: 0,
        margin: '.2rem',
        boxShadow: '0 -1px 6px 0 rgba(0,0,0,0.12)',
        background: 
          'linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, #f1f1f1 50%, rgb(255 255 255 / 0%) 100%)',
        animation: '$rotate-vert-center-h 0.6s cubic-bezier(0.550, 0.055, 0.675, 0.190) 0.6s both'
    },
    '@keyframes rotate-vert-center-h': {
        '0%': {
            transform: 'rotateY(0)',
        },
        '100%': {
            transform: 'rotateY(360deg)',
            opacity: 1,
        },
      },
    p2: {
        fontFamily: `'Merriweather', serif`,
        marginBottom: 10
    },
    p: {
        fontFamily: `'Merriweather', serif`,
    },
  });

const MyCityHourly = ({ hourly }) => {
    const classes = useStyles();
    const data24 = hourly.slice(0, 24)
    return ( 
        <Box className={classes.boxCont}>
            {
            data24.map((hourlyData, index) => {
                const fullDate = new Date(hourlyData.dt * 1000);
                const hours = (fullDate.getHours() < 10 ? '0' : '') + fullDate.getHours();
                const minutes = fullDate.getMinutes() + '0';
                const currentTime = `${hours}:${minutes}`;
                return (
                    <Box key={index} style={{transform: `scaleY(-1) translateY(${hourlyData.temp}px)`}} className={classes.box}>
                        <Typography variant="subtitle2" className={classes.p2}>
                            {Math.trunc(hourlyData.temp)}&deg;
                        </Typography>
                        <Typography variant="subtitle2" className={classes.p}>
                            {currentTime}
                        </Typography>
                    </Box>
                )})
            }
        </Box>
    )
}

export default MyCityHourly;