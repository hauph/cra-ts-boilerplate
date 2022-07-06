import * as localforage from 'localforage';
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const persistConfig: PersistConfig<any> = {
	key: 'root',
	version: 1,
	storage: localforage,
	blacklist: [],
};

const logger = (createLogger as any)();

const dev = process.env.NODE_ENV === 'development';

// let middleware = dev ? applyMiddleware(thunk, logger) : applyMiddleware(thunk);

// if (dev) {
// 	middleware = composeWithDevTools(middleware);
// }

const reducer = persistReducer(persistConfig, rootReducer());

export default () => {
	const store = configureStore({
		reducer,
		preloadedState: {},
		devTools: dev,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false }).concat(dev ? [thunk, logger] : [thunk]),
	});
	const persistor = persistStore(store);
	return { store, persistor };
};
