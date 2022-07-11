import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const reducerPath = 'api';

export const RENEW_AFTER_LOGIN_TAG = 'ReviewAfterLogin';

/**
 * Use rootApiQuery.injectEndpoints to create other api queries
 * https://redux-toolkit.js.org/rtk-query/usage/code-splitting
 */
export const rootApiQuery = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
    }),
    endpoints: () => ({}),
    tagTypes: [RENEW_AFTER_LOGIN_TAG],
});
