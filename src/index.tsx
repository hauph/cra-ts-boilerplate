import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReduxProvider } from './providers/ReduxProvider';

const rootEl = document.getElementById('root');
ReactDOM.render(<ReduxProvider />, rootEl);
