import React from 'react';
import ReactDOM from 'react-dom';
import './style/styles.scss';

// Importing Components
import AppRouter from './router/AppRouter'

const root = document.getElementById("root");
ReactDOM.render(<AppRouter /> , root )