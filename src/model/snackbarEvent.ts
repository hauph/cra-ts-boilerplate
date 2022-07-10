import type { PayloadAction } from '@reduxjs/toolkit'

export interface SnackbarEvent {
	message: string;
	severity: "error" | "success" | "info";
	technicalInfo?: any;
}

export enum SnackbarEventActions {
	ADD_SNACKBAR_EVENT = "ADD_SNACKBAR_EVENT",
	DELETE_SNACKBAR_EVENT = "DELETE_SNACKBAR_EVENT",
	PURGE_SNACKBARS = "PURGE_SNACKBARS",
}

export type SnackbarEventAction = PayloadAction<
	SnackbarEvent
>
