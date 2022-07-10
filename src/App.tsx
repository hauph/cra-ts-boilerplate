// prettier-ignore
// import { useMediaQuery } from "@material-ui/core";
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { withRoot } from './HOCs/withRoot';
import { RouteProvider } from './providers';
// import { useSelector } from 'react-redux';
// import { useActions } from './actions';
// import * as ConfigActions from './actions/config';
// import { RootState } from './reducers';
import './styles/App.scss';

import { Snackbar } from './components/Snackbar';

function App() {
	const classes = useStyles();
	// const drawerOpen: boolean = useSelector((state: RootState) => state.drawerOpen);
	// const configActions: typeof ConfigActions = useActions(ConfigActions);
	// const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	// const handleDrawerToggle = () => {
	// 	configActions.setDrawerOpen(!drawerOpen);
	// };

	return (
		<BrowserRouter>
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<Snackbar />
					<div className={classes.content}>
						<RouteProvider />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		height: '100%',
		zIndex: 1,
		overflow: 'hidden',
	},
	appFrame: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: '100%',
		height: 'calc(100% - 56px)',
		marginTop: 56,
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px)',
			marginTop: 64,
		},
	},
}));

export default withRoot(App);
