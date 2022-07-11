import { combineReducers } from "redux";

import { SnackbarEvents } from '../slices'
import { rootApiQuery } from '../api-queries'
import { SnackbarEvent } from "../../model";

export interface RootState {
	snackbarEvents: SnackbarEvent[];
}

export default () =>
	combineReducers({
		[SnackbarEvents.sliceName]: SnackbarEvents.reducer,

		// API sections
		[rootApiQuery.reducerPath]: rootApiQuery.reducer,
	});
