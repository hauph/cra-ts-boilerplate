import type { RouteObject } from 'react-router-dom';
import { HomePage } from '../pages';

// To define route object, refer to https://reactrouter.com/docs/en/v6/examples/route-objects

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
];
