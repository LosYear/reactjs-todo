import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// CSS imports
import 'normalize.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
