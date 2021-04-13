import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//STEP 1: Importing the store(container) for all of my redux
import { createStore } from 'redux';
//STEP 2: Importing provider to wrap my app within
import { Provider } from 'react-redux';
//STEP 3: Importing reducer to create store
import { reducer } from './reducers/index';

import 'bulma/css/bulma.css';
import './styles.scss';

//STEP 4: creating reducer store with imports
const store = createStore(reducer);

const rootElement = document.getElementById('root');

ReactDOM.render(
//STEP 5: Wrapping the App within the provider 
<Provider store={store}>
<App />
</Provider>, 
rootElement);
