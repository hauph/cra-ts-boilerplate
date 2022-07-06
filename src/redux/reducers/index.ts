import { combineReducers } from "redux";

import * as snackbarReducer from './snackbarEvent';
import { SnackbarEvent } from "../../model";


export interface RootState {
	snackbarEvents: SnackbarEvent[];
}

export default () =>
	combineReducers({
		...snackbarReducer,
	});
