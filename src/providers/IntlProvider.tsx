import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/polyfill';
import React from 'react';
import { IntlProvider as Provider } from 'react-intl';
import messages from '../i18n';

interface Props {
	children: React.ReactNode;
	locale: string;
}

// TODO: load translation dynamically when we allow change languages in application to match MUI's localization.
export const IntlProvider: React.FC<Props> = ({ children, locale }) => {
	return (
		<Provider locale={locale.substring(0, 2)} messages={messages[locale as keyof typeof messages]}>
			{children}
		</Provider>
	);
};
