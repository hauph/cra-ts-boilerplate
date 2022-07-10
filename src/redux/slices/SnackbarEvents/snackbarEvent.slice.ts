import { createSlice } from '@reduxjs/toolkit'
import { SnackbarEvent, SnackbarEventAction, SnackbarEventActions } from '../../../model/snackbarEvent';

const initialState: SnackbarEvent[] = [];

export const sliceName = 'snackbarEvents';

const snackbarEventsSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        [SnackbarEventActions.ADD_SNACKBAR_EVENT](state, action: SnackbarEventAction) {
            state.push(action.payload);
        },
        [SnackbarEventActions.DELETE_SNACKBAR_EVENT](state, action: SnackbarEventAction) {
            state = state.filter(e => e.message !== action.payload.message);
        },
        [SnackbarEventActions.PURGE_SNACKBARS](state) {
            state = [];
        },
    },
})

export const { ADD_SNACKBAR_EVENT, DELETE_SNACKBAR_EVENT, PURGE_SNACKBARS } = snackbarEventsSlice.actions

export const { reducer } = snackbarEventsSlice