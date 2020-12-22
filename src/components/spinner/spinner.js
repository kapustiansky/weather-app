import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#afafaf',
		},
  }})

const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  '& > * + *': {
		marginTop: theme.spacing(2),
	  },
	},
  }));

const Spinner = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root} >
				<LinearProgress color="primary" />
			</div>
		</ThemeProvider>
	)
}

export default Spinner;