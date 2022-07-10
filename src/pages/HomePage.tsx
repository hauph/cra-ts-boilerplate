import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { FormattedMessage } from 'react-intl';

export function HomePage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<FormattedMessage id="homePage" />
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		height: '100%',
		textAlign: 'center',
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
	},
});
