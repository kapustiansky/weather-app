import React from 'react';
import {  
    Box,
    makeStyles,
    Typography,
    IconButton
} from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const useStyles = makeStyles({
    box: {
        padding: '1rem 1.5rem .5rem',
        fontFamily: `'Merriweather', serif`
    },
    h2: {
        fontFamily: `'Roboto Slab', serif`
    }
  });

const MyCityHeader = ({ dt }) => {
    const classes = useStyles();
    const myCityName = JSON.parse(sessionStorage.getItem('myCity'));
    const fullDate = new Date(dt * 1000);
    const month = fullDate.getMonth() + 1;
    const date = (fullDate.getDate() < 10 ? '0' : '') + fullDate.getDate();
    const currentDate = `${date}.${month}`;
    return (
        <Box display="flex" justifyContent="space-between" alignItems="end" className={classes.box}>
            <Box display="flex" flexDirection="column" alignItems="end">
                <IconButton aria-label="refresh" size="small">
                    <AutorenewIcon />
                </IconButton>
                {currentDate}
            </Box>
            <Typography variant="h3" component="h1" className={classes.h2}>
                {myCityName.name}
            </Typography>
        </Box>
    );
}

export default MyCityHeader;