import * as localforage from 'localforage';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { rootApiQuery } from '../api-queries';

const persistConfig: PersistConfig<any> = {
	key: 'root',
	version: 1,
	storage: localforage,
	blacklist: ['snackbarEvents', 'api'],
};

const logger = (createLogger as any)();

const dev = process.env.NODE_ENV === 'development';

const reducer = persistReducer(persistConfig, rootReducer());

export default () => {
	const store = configureStore({
		reducer,
		preloadedState: {},
		devTools: dev,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false }).concat(
				dev ? [thunk, logger, rootApiQuery.middleware] : [thunk, rootApiQuery.middleware]
			),
	});
	const persistor = persistStore(store);
	return { store, persistor };
};
