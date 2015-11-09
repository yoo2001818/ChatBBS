import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
injectTapEventPlugin();

const container = document.createElement('div');
document.body.appendChild(container);
render(<App />, container);
