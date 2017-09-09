import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const props = window.__SERVER_DATA || {};

ReactDOM.render(<App {...props} />, document.getElementById('root'));
