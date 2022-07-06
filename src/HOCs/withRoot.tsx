import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState, useMemo } from 'react';
import * as locales from '@mui/material/locale';
import { IntlProvider } from '../providers/IntlProvider';

// A theme with custom primary and secondary color.
// It's optional.
const theme = {
	palette: {
		primary: {
			light: '#e5e5e5',
			main: '#727272',
			dark: '#363839',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff5e50',
			main: '#e41e26',
			dark: '#a90000',
			contrastText: '#fff',
		},
	},
};

export function withRoot(Component: any) {
	function WithRoot(props: object) {
		const [locale, setLocale] = useState('vi_VN');

		const themeWithLocale = useMemo(
			() => createMuiTheme(theme, locales[locale.replace('_', '') as keyof typeof locales]),
			[locale]
		);

		// MuiThemeProvider makes the theme available down the React tree
		// thanks to React context.
		return (
			<ThemeProvider theme={themeWithLocale}>
				{/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<IntlProvider locale={locale}>
					<Component {...props} />
				</IntlProvider>
			</ThemeProvider>
		);
	}

	return WithRoot;
}
